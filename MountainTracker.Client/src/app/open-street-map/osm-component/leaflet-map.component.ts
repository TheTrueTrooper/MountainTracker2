import { AfterViewInit, Component, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements AfterViewInit {
  @Input()
  public MapBoxId: string = "map";
  @Input()
  public MapTileSource: TargetOSMap | null = null;
  public AdditionalTiles: TargetOSMap[] = [];

  private map: L.Map | null = null;

  private initMap(): void {
    this.map = L.map(this.MapBoxId, {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    if(this.MapTileSource != null)
    {
      const tiles = L.tileLayer(this.MapTileSource.MapTileSource, {
        maxZoom: 18,
        minZoom: 3,
        attribution: this.MapTileSource.MapAttribution
      });

      tiles.addTo(this.map);
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => this.map!.setView([ position.coords.latitude, position.coords.longitude ], 10));
    }
  }

  public addTile(targetOSMap: TargetOSMap)
  {
    if(this.map == null)
      throw new Error("Map is not initialized yet. Please waith until the after the ngAfterViewInit.");

    const tiles = L.tileLayer(targetOSMap.MapTileSource, {
      maxZoom: 18,
      minZoom: 3,
      attribution: targetOSMap.MapAttribution
    });

    tiles.addTo(this.map!);
    this.AdditionalTiles.push(targetOSMap);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
   }
}

export class TargetOSMap
{
  public  MapTileSource: string;
  public  MapAttribution: string;

  constructor(mapTileSource: string, mapAttribution: string)
  {
    this.MapTileSource = mapTileSource;
    this.MapAttribution = mapAttribution;
  }
}

export const TargetOSMSourceFactory = 
{
  OSMap: function() {
    return new TargetOSMap('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors')
  },
  CyclOSMap: function() {
    return new TargetOSMap('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors')
  },
  OpenTopoMap: function() {
    return new TargetOSMap('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors')
  },
  PianoOSMap: function() {
    return new TargetOSMap('https://{s}.piano.tiles.quaidorsay.fr/fr/{z}/{x}/{y}.png', 'Tiles <a href="https://github.com/tilery/pianoforte">PianoFr</a> | &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors')
  },
  OverlaySources:{
    CyclOSMapLite: function() {
      return new TargetOSMap('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm-lite/{z}/{x}/{y}.png', 'CyclOSM Lite')
    },
    WaymarkedTrails: function() {
      return new TargetOSMap('https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png', '<a href="https://cycling.waymarkedtrails.org/">https://cycling.waymarkedtrails.org/</a>')
    }
  }
}