import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { PannellumCubeMapConfig, PannellumEquirectangularConfig, PannellumHotSpot, PannellumMultiresConfig, PannellumPanoramaType, PannellumPanoramaTypeEnum, PannellumSharedConfig, PannellumTour, PannellumViewer  } from '../../type-definitions';

@Component({
  selector: 'pannellum-panorama',
  templateUrl: './pannellum-panorama.component.html',
  styleUrls: ['./pannellum-panorama.component.scss']
})
export class PannellumComponent implements AfterViewInit, OnDestroy {
  @Input()
  public PanoramaId: string = "panorama"
  @Input()
  public PanoramaSrc: string | 'InOptions' = 'InOptions';
  @Input()
  public PanoramaType: PannellumPanoramaType | 'InOptions' = 'equirectangular'
  @Input()
  public Options: PannellumEquirectangularConfig | PannellumCubeMapConfig | PannellumMultiresConfig | PannellumTour | null = null;
  @Input()
  public HotSpots: PannellumHotSpot[] | null = null;

  @Output()
  public OnMouseDown: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public OnMouseUp: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public OnLoad: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public OnError: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public OnErrorCleared: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public OnAnimateFinished: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public OnSceneChange: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public OnSceneChangeFadeDone: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public OnTouchEnd: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public OnTouchStart: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public OnZoomChange: EventEmitter<object> = new EventEmitter<object>();

  private pannellumViewer: PannellumViewer | null = null

  private ensureArray(array: any[] | null | undefined): any[]
  {
    return array ?? [];
  }

  private initPanorama(): void {
    //If there are options lets work with it.
    if(this.Options != null)
    {
      //check if default and scenes are set. If they are it must be a tour and do not fix anything.
      if((this.Options as PannellumTour).default === undefined && (this.Options as PannellumTour).scenes === undefined)
      {
        const Options: PannellumEquirectangularConfig | PannellumCubeMapConfig | PannellumMultiresConfig = {
          ...this.Options,
          type: this.PanoramaType !== 'InOptions'? this.PanoramaType: (this.Options as PannellumSharedConfig).type,
          //join the two hotspots. Not sure why you would respecify but this simplifies selection and also fixes bug in API where the array may not be set when adding a hotspot after init.
          hotSpots: [...this.ensureArray((this.Options as PannellumSharedConfig)?.hotSpots), ...this.ensureArray(this.HotSpots)]
        } as PannellumEquirectangularConfig | PannellumCubeMapConfig | PannellumMultiresConfig;
        //allow PanoramaSrc to override in cases of equirectangular for quick set up. This is only supportable for equirectangular as other options require more complicated app.
        if(this.PanoramaType == PannellumPanoramaTypeEnum[PannellumPanoramaTypeEnum.equirectangular] && this.PanoramaSrc != 'InOptions')
        {
          (Options as PannellumEquirectangularConfig).panorama = this.PanoramaSrc;
        }
        //if panormaSource set and type is not a valid type log a warning for a potental mistake
        else if(this.PanoramaType != PannellumPanoramaTypeEnum[PannellumPanoramaTypeEnum.equirectangular] && this.PanoramaSrc != 'InOptions')
        {
          console.warn("PannellumComponent Warning:0: Panoram source set but not supported on type. Falling back to options. Consider using the options for this if using advanced types");
        }
        this.pannellumViewer = globalThis.window.pannellum.viewer(this.PanoramaId, Options);
      }
      else
      {
        this.pannellumViewer = globalThis.window.pannellum.viewer(this.PanoramaId, this.Options);
      }
    }
    else if(this.PanoramaType == PannellumPanoramaTypeEnum[PannellumPanoramaTypeEnum.equirectangular] && this.PanoramaSrc != 'InOptions')
    {
      //in this case instance the viewer based off configs
      const Options: PannellumEquirectangularConfig = {
        type: this.PanoramaType,
        panorama: this.PanoramaSrc,
        hotSpots: this.ensureArray(this.HotSpots)
      } as PannellumEquirectangularConfig;
      this.pannellumViewer = globalThis.window.pannellum.viewer(this.PanoramaId, Options);
    }
    else
    {
      throw Error(`PannellumComponent Error:0: Minimun configuration not met in ${this.PanoramaId}'s PannellumComponent. Please specify either the options or set the quick options for PanoramaSrc and PanoramaType as equirectangular. Note that other types to not suport quick sourcing. Consider using options object for advanced types`)
    }
    this.subscribeTo();
  }

  private subscribeTo()
  {
    if(this.pannellumViewer)
    {
      this.pannellumViewer.on('mousedown', (e)=>this.OnMouseDown.emit(e));
      this.pannellumViewer.on('mouseup', (e)=>this.OnMouseUp.emit(e));
      this.pannellumViewer.on('load', (e)=>this.OnLoad.emit(e));
      this.pannellumViewer.on('error', (e)=>this.OnError.emit(e));
      this.pannellumViewer.on('errorcleared', (e)=>this.OnErrorCleared.emit(e));
      this.pannellumViewer.on('animatefinished', (e)=>this.OnAnimateFinished.emit(e));
      this.pannellumViewer.on('scenechange', (e)=>this.OnSceneChange.emit(e));
      this.pannellumViewer.on('scenechangefadedone', (e)=>this.OnSceneChangeFadeDone.emit(e));
      this.pannellumViewer.on('touchend', (e)=>this.OnTouchEnd.emit(e));
      this.pannellumViewer.on('touchstart', (e)=>this.OnTouchStart.emit(e));
      this.pannellumViewer.on('zoomchange', (e)=>this.OnZoomChange.emit(e));
    }
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initPanorama();
  }

  ngOnDestroy(): void {
    if(this.pannellumViewer != null)
    {
      this.pannellumViewer.destroy();
    }
  }
}
