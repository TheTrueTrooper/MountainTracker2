import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { PannellumCubeMapConfig, PannellumEquirectangularConfig, PannellumHotSpot, PannellumMultiresConfig, PannellumPanoramaType, PannellumPanoramaTypeEnum, PannellumRender, PannellumSharedConfig, PannellumTour, PannellumViewer  } from '../../type-definitions';

const initErrorMessage = "PannellumComponent Error:1: api called before instancing. Please only call API after instanced";

@Component({
  selector: 'pannellum-panorama',
  templateUrl: './pannellum-panorama.component.html',
  styleUrls: ['./pannellum-panorama.component.scss']
})
export class PannellumComponent implements AfterViewInit, OnDestroy {
  @Input()
  public panoramaId: string = "panorama";
  @Input()
  public panoramaSrc: string | 'InOptions' = 'InOptions';
  @Input()
  public panoramaType: PannellumPanoramaType | 'InOptions' = 'equirectangular'
  @Input()
  public options: PannellumEquirectangularConfig | PannellumCubeMapConfig | PannellumMultiresConfig | PannellumTour | null = null;
  @Input()
  public hotSpots: PannellumHotSpot[] | null = null;

  @Output()
  public onMouseDown: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public onMouseUp: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public onLoad: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public onError: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public onErrorCleared: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public onAnimateFinished: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public onSceneChange: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public onSceneChangeFadeDone: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public onTouchEnd: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public onTouchStart: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  public onZoomChange: EventEmitter<object> = new EventEmitter<object>();

  private pannellumViewer: PannellumViewer | null = null;

  public get getConfig(): PannellumEquirectangularConfig | PannellumCubeMapConfig | PannellumMultiresConfig | PannellumTour
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    return this.pannellumViewer.getConfig() as PannellumEquirectangularConfig | PannellumCubeMapConfig | PannellumMultiresConfig | PannellumTour
  }

  public get getContainer(): HTMLElement
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    return this.pannellumViewer.getContainer();
  }

  public get getHorizontalFieldView(): number
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    return this.pannellumViewer.getHfov();
  }

  public get getHorizontalFieldViewBounds(): [min: number, max: number]
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    return this.pannellumViewer.getHfovBounds();
  }

  public get getHorizonPitch(): number
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    return this.pannellumViewer.getHorizonPitch();
  }

  public get getHorizonRoll(): number
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    return this.pannellumViewer.getHorizonRoll();
  }

  public get getNorthOffset(): number
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    return this.pannellumViewer.getNorthOffset();
  }

  public get getPitch(): number
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    return this.pannellumViewer.getPitch();
  }

  public get getPitchBounds(): [min: number, max: number]
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    return this.pannellumViewer.getPitchBounds();
  }

  public get getRenderer(): PannellumRender
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    return this.pannellumViewer.getRenderer();
  }

  public get getSceneId(): string
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    return this.pannellumViewer.getScene();
  }

  public get getYaw(): number
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    return this.pannellumViewer.getYaw();
  }

  public get getYawBounds(): [min: number, max: number]
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    return this.pannellumViewer.getYawBounds();
  }

  public get isViewerLoaded(): boolean
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    return this.pannellumViewer.isLoaded();
  }

  public get isViewerLoading(): boolean
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    return this.pannellumViewer.isLoading();
  }

  public get isOrientationActive(): boolean
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    return this.pannellumViewer.isOrientationActive();
  }

  public addScene(sceneId: string, sceneConfig: PannellumEquirectangularConfig | PannellumCubeMapConfig | PannellumMultiresConfig): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.addScene(sceneId, sceneConfig);
    return this;
  }

  public addHotSpot(hotspotConfig: PannellumHotSpot, sceneId?: string): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.addHotSpot(hotspotConfig, sceneId);
    return this;
  }

  public loadScene(sceneId: string, pitch?: number, yaw?: number, hfov?: number): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.loadScene(sceneId, pitch, yaw, hfov);
    return this;
  }

  public lookAt(pitch: number, yaw: number, hfov: number, animated: number | boolean = false, callback?: ((callbackArgs: object) => void), callbackArgs?: object): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.lookAt(pitch, yaw, hfov, animated, callback, callbackArgs);
    return this;
  }

  public mouseEventToCoords(event: MouseEvent): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.mouseEventToCoords(event);
    return this;
  }

  public removeHotSpot(hotSpotId: string, sceneId?: string): boolean
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    return this.pannellumViewer.removeHotSpot(hotSpotId, sceneId);
  }

  public setHorizontalFieldView(hfov: number, animated: number | boolean, callback?: ((callbackArgs: object) => void), callbackArgs?: object): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.setHfov(hfov, animated, callback, callbackArgs);
    return this;
  }

  public setHorizontalFieldViewBounds(bounds: [min: number, max: number]): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.setHfovBounds(bounds);
    return this;
  }

  public setHorizonPitch(pitch: number): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.setHorizonPitch(pitch);
    return this;
  }

  public setHorizonRoll(roll: number): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.setHorizonRoll(roll);
    return this;
  }

  public setNorthOffset(heading: number): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.setNorthOffset(heading);
    return this;
  }

  public setPitch(pitch: number, animated: number | boolean, callback?: ((callbackArgs: object) => void), callbackArgs?: object): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.setPitch(pitch, animated, callback, callbackArgs);
    return this;
  }

  public setPitchBounds(bounds: [min: number, max: number]): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.setPitchBounds(bounds);
    return this;
  }

  public setUpdate(force: boolean): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.setUpdate(force);
    return this;
  }

  public setYaw(yaw: number, animated: number | boolean, callback?: ((callbackArgs: object) => void), callbackArgs?: object): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.setYaw(yaw, animated, callback, callbackArgs);
    return this;
  }

  public setYawBounds(bounds: [min: number, max: number]): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.setYawBounds(bounds);
    return this;
  }

  public startAutoRotate(speed?: number, pitch?: number): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.startAutoRotate(speed, pitch);
    return this;
  }

  public stopAutoRotate(): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.stopAutoRotate();
    return this;
  }

  public stopMovement(): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.stopMovement();
    return this;
  }

  public stopOrientation(): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.stopOrientation();
    return this;
  }

  public toggleFullscreen(): PannellumComponent
  {
    if(this.pannellumViewer == null)
      throw Error(initErrorMessage);
    this.pannellumViewer.toggleFullscreen();
    return this;
  }

  private ensureArray(array: any[] | null | undefined): any[]
  {
    return array ?? [];
  }

  private initPanorama(): void {
    //If there are options lets work with it.
    if(this.options != null)
    {
      //check if default and scenes are set. If they are it must be a tour and do not fix anything.
      if((this.options as PannellumTour).default === undefined && (this.options as PannellumTour).scenes === undefined)
      {
        const Options: PannellumEquirectangularConfig | PannellumCubeMapConfig | PannellumMultiresConfig = {
          ...this.options,
          type: this.panoramaType !== 'InOptions'? this.panoramaType: (this.options as PannellumSharedConfig).type,
          //join the two hotspots. Not sure why you would respecify but this simplifies selection and also fixes bug in API where the array may not be set when adding a hotspot after init.
          hotSpots: [...this.ensureArray((this.options as PannellumSharedConfig)?.hotSpots), ...this.ensureArray(this.hotSpots)]
        } as PannellumEquirectangularConfig | PannellumCubeMapConfig | PannellumMultiresConfig;
        //allow PanoramaSrc to override in cases of equirectangular for quick set up. This is only supportable for equirectangular as other options require more complicated app.
        if(this.panoramaType == PannellumPanoramaTypeEnum[PannellumPanoramaTypeEnum.equirectangular] && this.panoramaSrc != 'InOptions')
        {
          (Options as PannellumEquirectangularConfig).panorama = this.panoramaSrc;
        }
        //if panormaSource set and type is not a valid type log a warning for a potental mistake
        else if(this.panoramaType != PannellumPanoramaTypeEnum[PannellumPanoramaTypeEnum.equirectangular] && this.panoramaSrc != 'InOptions')
        {
          console.warn("PannellumComponent Warning:0: Panoram source set but not supported on type. Falling back to options. Consider using the options for this if using advanced types");
        }
        this.pannellumViewer = globalThis.window.pannellum.viewer(this.panoramaId, Options);
      }
      else
      {
        this.pannellumViewer = globalThis.window.pannellum.viewer(this.panoramaId, this.options);
      }
    }
    else if(this.panoramaType == PannellumPanoramaTypeEnum[PannellumPanoramaTypeEnum.equirectangular] && this.panoramaSrc != 'InOptions')
    {
      //in this case instance the viewer based off configs
      const Options: PannellumEquirectangularConfig = {
        type: this.panoramaType,
        panorama: this.panoramaSrc,
        hotSpots: this.ensureArray(this.hotSpots)
      } as PannellumEquirectangularConfig;
      this.pannellumViewer = globalThis.window.pannellum.viewer(this.panoramaId, Options);
    }
    else
    {
      throw Error(`PannellumComponent Error:0: Minimun configuration not met in ${this.panoramaId}'s PannellumComponent. Please specify either the options or set the quick options for PanoramaSrc and PanoramaType as equirectangular. Note that other types to not suport quick sourcing. Consider using options object for advanced types`)
    }
    this.subscribeTo();
  }

  private subscribeTo()
  {
    if(this.pannellumViewer)
    {
      this.pannellumViewer.on('mousedown', (e)=>this.onMouseDown.emit(e));
      this.pannellumViewer.on('mouseup', (e)=>this.onMouseUp.emit(e));
      this.pannellumViewer.on('load', (e)=>this.onLoad.emit(e));
      this.pannellumViewer.on('error', (e)=>this.onError.emit(e));
      this.pannellumViewer.on('errorcleared', (e)=>this.onErrorCleared.emit(e));
      this.pannellumViewer.on('animatefinished', (e)=>this.onAnimateFinished.emit(e));
      this.pannellumViewer.on('scenechange', (e)=>this.onSceneChange.emit(e));
      this.pannellumViewer.on('scenechangefadedone', (e)=>this.onSceneChangeFadeDone.emit(e));
      this.pannellumViewer.on('touchend', (e)=>this.onTouchEnd.emit(e));
      this.pannellumViewer.on('touchstart', (e)=>this.onTouchStart.emit(e));
      this.pannellumViewer.on('zoomchange', (e)=>this.onZoomChange.emit(e));
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
