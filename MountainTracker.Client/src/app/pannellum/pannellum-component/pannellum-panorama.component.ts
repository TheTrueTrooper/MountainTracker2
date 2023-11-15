import { AfterViewInit, Component, Input } from '@angular/core';
import { EquirectangularConfig, PannellumViewer  } from '../pannellum-type/pannellum';

@Component({
  selector: 'pannellum-panorama',
  templateUrl: './pannellum-panorama.component.html',
  styleUrls: ['./pannellum-panorama.component.scss']
})
export class PannellumComponent implements AfterViewInit {
  @Input()
  PanoramaId: string = "panorama"
  @Input()
  PanoramaSrc: string = "panorama"

  private pannellumViewer: PannellumViewer | null = null

  private initMap(): void {
    this.pannellumViewer = globalThis.window.pannellum.viewer(this.PanoramaId, {
      type: "equirectangular",
      panorama: "https://pannellum.org/images/cerro-toco-0.jpg",
      autoLoad: true,
      autoRotate: true
    } as EquirectangularConfig)
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
   }
}
