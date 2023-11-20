import { AfterViewInit, Component, Input } from '@angular/core';
import * as L from 'leaflet';
import { TargetOSMap } from '../models';
import { TileConfig } from '../models/tile-config';

@Component({
  selector: 'leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements AfterViewInit {
  @Input()
  public containerCustomCss: string = "";
  @Input()
  public mapFrameCustomCss: string = "";
  @Input()
  public mapCustomCss: string = "";
  @Input()
  public mapBoxId: string = "map";
  @Input()
  public mapTileSource: TargetOSMap | null = null;
  private init: boolean = false;
  private _additionalTiles: TargetOSMap[] = [];
  @Input()
  public set additionalTiles(change: TargetOSMap[])
  {
    if(this.init)
    {
      let added = this.except(this._additionalTiles, change);
      let removed = this.except(change, this._additionalTiles);
      added.forEach(tile=>this.addTile(tile));
      removed.forEach(tile=>this.removeTile(tile));
    }
    else
    {
      this._additionalTiles = change;
    }
  }
  @Input()
  public maxZoom:number = 18
  @Input()
  public minZoom:number = 3

  private map: L.Map | null = null;

  private except(thisVal1: any[],  val2: any[]) {   
    return thisVal1.filter((el)=>{return val2.indexOf(el)<0;})  
  };

  private initMap(): void {
    this.map = L.map(this.mapBoxId, {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    if(this.mapTileSource != null)
    {
      const tile = L.tileLayer(this.mapTileSource.mapTileSource, new TileConfig(
        this.maxZoom,
        this.minZoom,
        this.mapTileSource.mapAttribution));

      tile.addTo(this.map);
      this._additionalTiles.forEach(additionalTile=>{
        L.tileLayer(additionalTile.mapTileSource,
          new TileConfig(
            this.maxZoom,
            this.minZoom,
            additionalTile.mapAttribution
        )).addTo(this.map!)
      });
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => this.map!.setView([ position.coords.latitude, position.coords.longitude ], 10));
    }
    this.init = true;
  }

  public addTile(targetOSMap: TargetOSMap)
  {
    if(this.map == null)
      throw new Error("Map is not initialized yet. Please waith until the after the ngAfterViewInit.");

    const tiles = L.tileLayer(targetOSMap.mapTileSource, new TileConfig(
      this.maxZoom,
      this.minZoom,
      targetOSMap.mapAttribution
    ));

    tiles.addTo(this.map!);
    this._additionalTiles.push(targetOSMap);
  }

  public removeTile(targetOSMap: TargetOSMap)
  {
    if(this.map == null)
      throw new Error("Map is not initialized yet. Please waith until the after the ngAfterViewInit.");

    const tiles = L.tileLayer(targetOSMap.mapTileSource, new TileConfig(
      this.maxZoom,
      this.minZoom,
      targetOSMap.mapAttribution
    ));

    tiles.remove();
    let index = this._additionalTiles.indexOf(targetOSMap);
    if (index > -1) {
      this._additionalTiles.splice(index, 1);
    }
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
   }
}