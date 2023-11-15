import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { PannellumCubeMapConfig, PannellumEquirectangularConfig, PannellumHotSpot, PannellumMultiresConfig, PannellumPanoramaType, PannellumPanoramaTypeEnum, PannellumViewer  } from '../pannellum/pannellum';

@Component({
  selector: 'pannellum-panorama',
  templateUrl: './pannellum-panorama.component.html',
  styleUrls: ['./pannellum-panorama.component.scss']
})
export class PannellumComponent implements AfterViewInit, OnDestroy {
  @Input()
  PanoramaId: string = "panorama"
  @Input()
  PanoramaSrc: string | null = null;
  @Input()
  PanoramaType: PannellumPanoramaType = "equirectangular"
  @Input()
  Options: PannellumEquirectangularConfig | PannellumCubeMapConfig | PannellumMultiresConfig | null = null;
  @Input()
  HotSpots: PannellumHotSpot[] | null = null;

  private pannellumViewer: PannellumViewer | null = null

  private ensureArray(array: any[] | null | undefined): any[]
  {
    return array ?? [];
  }

  private initMap(): void {
    let Options = {
      ...this.Options,
      type: this.PanoramaType,
      hotSpots: [...this.ensureArray(this.Options?.hotSpots), ...this.ensureArray(this.HotSpots)]
    } as PannellumEquirectangularConfig
    if(!Options!.panorama &&  PannellumPanoramaTypeEnum[this.PanoramaType] == PannellumPanoramaTypeEnum.equirectangular)
    {
      Options!.panorama = this.PanoramaSrc!;
    }
    this.pannellumViewer = globalThis.window.pannellum.viewer(this.PanoramaId, Options)
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
   }

  ngOnDestroy(): void {
    if(this.pannellumViewer != null)
    {
      this.pannellumViewer.destroy();
    }
  }
}
