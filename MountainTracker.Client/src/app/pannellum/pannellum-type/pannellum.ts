import 'pannellum/src/js/libpannellum'
import 'pannellum/src/js/pannellum'

export type PannellumPanoramaType = 'equirectangular' | 'cube' | 'multires';

export enum PannellumPanoramaTypeEnum 
{
  'equirectangular',
  'cube',
  'multires'
}

export type PannellumCrossOrigin = 'anonymous' | 'use-credentials' ;

export type PannellumEventType = 'load' | 'scenechange' | 'fullscreenchange' | 'zoomchange' | 'scenechangefadedone' | 'animatefinished' | 'error' | 'errorcleared' | 'mousedown' | 'mouseup' | 'touchstart' | 'touchend';

export type EquirectangularConfig = {
  haov?: number
  vaov?: number 
  vOffset?: number 
  panorama: string
  ignoreGPanoXMP?: boolean
  dynamic?: boolean
  dynamicUpdate?: boolean
  type: 'equirectangular'
} & SharedConfig

export type CubeMapConfig = {
  cubeMap: string[]
  type: 'cube'
} & SharedConfig

export type MultiresConfig = {
  path: string
  basePath: string
  fallback: string
  extension: string
  tileResolution: number
  maxLevel: number
  cubeResolution: number
  type: 'multires'
} & SharedConfig

export type SharedConfig = {
    hfov?: number
    publicminHfov?: number
    multiResMinHfov?: boolean
    pitch?: number
    minPitch?: number
    maxPitch?: number
    minHfov?: number 
    maxHfov?: number
    yaw?: number
    minYaw?: number
    maxYaw?: number
    roll?: number
    autoRotate?: boolean
    autoRotateInactivityDelay?: number
    autoRotateStopDelay?: number
    type: PannellumPanoramaType
    northOffset?: number
    showFullscreenCtrl?: boolean
    dynamic?: boolean
    dynamicUpdate?: boolean
    doubleClickZoom?: boolean
    keyboardZoom?: boolean
    mouseZoom?: boolean | 'fullscreenonly'
    showZoomCtrl?: boolean
    autoLoad?: boolean
    showControls?: boolean
    orientationOnByDefault?: boolean
    hotSpotDebug?: boolean
    backgroundColor?: [number, number, number]
    avoidShowingBackground?: boolean
    previewAuthor?: string
    preview?: string
    animationTimingFunction?: ((number: number)=>number)
    draggable?: boolean
    disableKeyboardCtrl?: boolean
    crossOrigin?: PannellumCrossOrigin
    touchPanSpeedCoeffFactor?: number
    capturedKeyNumbers?: number[]
    friction?: number
    compass?: boolean
    hotSpots?: HotSpot[]
    escapeHTML?: boolean
    basePath?: string
    strings?: PannellumStringsDictionary
    authorURL?: string
    author?: string
    title?: string
    sceneFadeDuration?: number

  }

  export type PannellumStringsDictionary = {
    [key: string]: any
  }

  export type Scenes = {
    [key: string]: EquirectangularConfig | CubeMapConfig | MultiresConfig
  }

  export type HotSpot = {
    pitch: number
    yaw: number
    type: "info" | string //feel like there is more values here but I'm not sure and could not identify them so I'm leaving it open with a string for now but at least you have some help
    text?: string
    URL?: string
    attributes?: object
    sceneId?: string
    targetPitch?: number
    targetYaw?: number
    targetHfov?: number
    id?: any
    cssClass?: string | undefined
    createTooltipFunc?: ((createArgs: object)=> void)
    clickHandlerFunc?: ((createArgs: object)=> void)
    scale?: boolean
  }

  export type PannellumRender = {
    init(haov: number, vaov: number, voffset: number, callback: (()=>void), params: {horizonPitch : number, horizonRoll: number, backgroundColor: [number, number, number]}, image: HTMLImageElement | string[] | Object,  imageType: string, dynamic: boolean): void
    getCanvas(): HTMLElement
    isLoading(): boolean
    render(pitch: number, yaw: number, hfov: number, params: { roll: number, returnImage: boolean }): void | HTMLImageElement
    setPose(horizonPitch: number, horizonRoll: number): void
    resize(): void
    destroy(): void
  }


  export type PannellumViewer = {
    isLoading(): boolean
    getPitch(): number
    setPitch(set: number, animated: boolean | number, callback: ((callbackArgs: object)=>void), callbackArgs: object): PannellumViewer
    getPitchBounds(): [min: number, max: number]
    setPitchBounds(set: [min: number, max: number]): PannellumViewer
    getYaw(): number
    setYaw(set: number): PannellumViewer
    getYawBounds(): [min: number, max: number]
    setYawBounds(set: [min: number, max: number]): PannellumViewer
    getHfov(): number
    setHfov(set: number, animated: boolean | number, callback: ((callbackArgs: object)=>void), callbackArgs: object): PannellumViewer
    getHfovBounds(): [min: number, max: number]
    setHfovBounds(set: [min: number, max: number]): PannellumViewer
    lookAt(pitch : number, yaw: number, hfov: number, animated: number | boolean, callback: ((callbackArgs: object)=>void), callbackArgs: object): PannellumViewer
    getNorthOffset(): number
    setNorthOffset(set: number): PannellumViewer
    getHorizonRoll(): number
    setHorizonRoll(set: number): PannellumViewer
    getHorizonPitch(): number
    setHorizonPitch(set: number): PannellumViewer
    startAutoRotate(speed: number, pitch: number): PannellumViewer
    stopAutoRotate(): PannellumViewer
    stopMovement(): PannellumViewer
    getRenderer(): PannellumRender
    setUpdate(force: boolean): PannellumViewer
    mouseEventToCoords(event: MouseEvent):[pitch : number, yaw: number]
    loadScene(sceneId: string, pitch: number, yaw: number, hfov: number): PannellumViewer
    getScene(): string
    addScene(sceneId: string, config: EquirectangularConfig | CubeMapConfig | MultiresConfig | Scenes): PannellumViewer
    removeScene(sceneId: string): boolean
    toggleFullscreen(): boolean
    getConfig():  EquirectangularConfig | CubeMapConfig | MultiresConfig | Scenes
    getContainer(): HTMLElement
    addHotSpot(config: HotSpot): PannellumViewer
    removeHotSpot(hotSpotId: string, sceneId: string): boolean
    resize(): PannellumViewer
    isOrientationSupported(): boolean
    stopOrientation(): PannellumViewer
    startOrientation(): PannellumViewer
    isOrientationActive(): boolean
    on(type: PannellumEventType,callback: ((event: Event)=>void)): PannellumRender
    off(type: PannellumEventType,callback: ((event: Event)=>void)): PannellumViewer
    destroy(): void
  }

  declare global {
    interface Window { 
      pannellum: PannellumFactories
    }
  }

  export interface Window { 
    pannellum: PannellumFactories
  }

  export interface PannellumFactories {
    viewer(container: string | HTMLElement, config: EquirectangularConfig | CubeMapConfig | MultiresConfig | Scenes): PannellumViewer;
    Renderer(container: HTMLElement): PannellumRender
  }
