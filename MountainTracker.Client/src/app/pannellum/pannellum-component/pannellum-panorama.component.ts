import { AfterViewInit, Component, Input } from '@angular/core';
import { CubeMapConfig, EquirectangularConfig, MultiresConfig, PannellumPanoramaType, PannellumPanoramaTypeEnum, PannellumViewer  } from '../pannellum-type/pannellum';

@Component({
  selector: 'pannellum-panorama',
  templateUrl: './pannellum-panorama.component.html',
  styleUrls: ['./pannellum-panorama.component.scss']
})
export class PannellumComponent implements AfterViewInit {
  @Input()
  PanoramaId: string = "panorama"
  @Input()
  PanoramaSrc: string | null = null;
  @Input()
  PanoramaType: PannellumPanoramaType = "equirectangular"
  @Input()
  Options: EquirectangularConfig | CubeMapConfig | MultiresConfig | null = null;

  private pannellumViewer: PannellumViewer | null = null

  private initMap(): void {
    if(PannellumPanoramaTypeEnum[this.PanoramaType] == PannellumPanoramaTypeEnum.equirectangular && this.PanoramaId != null && this.PanoramaSrc != null)
    this.pannellumViewer = globalThis.window.pannellum.viewer(this.PanoramaId, {
      ...this.Options,
      type: this.PanoramaType,
      panorama: this.PanoramaSrc,
    } as EquirectangularConfig)
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
   }
}
