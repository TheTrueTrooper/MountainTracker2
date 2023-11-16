import 'pannellum/src/js/libpannellum'
import 'pannellum/src/js/pannellum'

/** possible Viewer config values for type of viewer */
export type PannellumPanoramaType = 'equirectangular' | 'cube' | 'multires';

/** utility enum for PannellumPanoramaType */
export enum PannellumPanoramaTypeEnum 
{
  'equirectangular',
  'cube',
  'multires'
}

/** Calues that may be used for configuration.  */
export type PannellumCrossOrigin = 'anonymous' | 'use-credentials' ;

/** events that you may specify in API
 * load -Fired when a panorama finishes loading.
 * scenechange - Fired when a scene change is initiated. A load event will be fired when the new scene finishes loading. Passes scene ID string to handler.
 * fullscreenchange - Fired when browser fullscreen status changed. Passes status boolean to handler.
 * zoomchange - Fired when scene hfov update. Passes new HFOV value to handler.
 * scenechangefadedone - If a scene transition fade interval is specified, this event is fired when the fading is completed after changing scenes.
 * animatefinished - Fired when any movements / animations finish, i.e. when the renderer stops rendering new frames. Passes final pitch, yaw, and HFOV values to handler.
 * error - Fired when an error occured. The error message string is passed to the event listener.
 * errorcleared - Fired when an error is cleared.
 * mousedown - Fired when the mouse button is pressed. Passes MouseEvent to handler.
 * mouseup - Fired when the mouse button is released. Passes MouseEvent to handler.
 * touchstart - Fired when a touch starts. Passes TouchEvent to handler.
 * touchend - Fired when a touch ends. Passes TouchEvent to handler.
 * messageshown - Fired when a message, e.g., for needing ctrl + scroll to zoom, is shown.
 * messagecleared - Fired when a previously shown message is cleared.
 */
export type PannellumEventType = 'load' | 'scenechange' | 'fullscreenchange' | 'zoomchange' | 'scenechangefadedone' | 'animatefinished' | 'error' | 'errorcleared' | 'mousedown' | 'mouseup' | 'touchstart' | 'touchend';

export type PannellumEquirectangularConfig = PannellumSharedConfig & {
  /** If a string is passed, it sets the URL to the equirectangular panorama image. This is relative to basePath if it is set, else it is relative to the location of pannellum.htm. An absolute URL can also be used. Alternatively, an already loaded image can be passed. */
  panorama: string
  /** Sets the panorama's horizontal angle of view, in degrees. Defaults to 360. This is used if the equirectangular image does not cover a full 360 degrees in the horizontal. */
  haov?: number
  /** Sets the panorama's vertical angle of view, in degrees. Defaults to 180. This is used if the equirectangular image does not cover a full 180 degrees in the vertical. */
  vaov?: number 
  /** Sets the vertical offset of the center of the equirectangular image from the horizon, in degrees. Defaults to 0. This is used if vaov is less than 180 and the equirectangular image is not cropped symmetrically. */
  vOffset?: number 
  /** If set to true, any embedded Photo Sphere XMP data will be ignored; else, said data will override any existing settings. Defaults to false. */
  ignoreGPanoXMP?: boolean
  /** Currently, only equirectangular dynamic content is supported. The panorama source is considered dynamic when this is set to true. Defaults to false. This should be set to true for video. */
  dynamic?: boolean
  /** Currently, only equirectangular dynamic content is supported. The panorama source is considered dynamic when this is set to true. Defaults to false. This should be set to true for video. */
  dynamicUpdate?: boolean
  /** This specifies the panorama Type. it will need to be equirectangular in this config type, For cube please switch to PannellumCubeMapConfig and for multires please switch to PannellumMultiresConfig*/
  type: 'equirectangular'
}

export type PannellumCubeMapConfig = PannellumSharedConfig & {
  /** This is an array of URLs for the six cube faces in the order front, right, back, left, up, down. These are relative to basePath if it is set, else they are relative to the location of pannellum.htm. Absolute URLs can also be used. Partial cubemap images may be specified by giving null instead of a URL. */
  cubeMap: string[]
  /** This specifies the panorama Type. it will need to be equirectangular in this config type, For equirectangular please switch to PannellumEquirectangularConfig and for multires please switch to PannellumMultiresConfig*/
  type: 'cube'
}

export type PannellumMultiresConfig = PannellumSharedConfig & {
  /** This is the base path of the URLs for the multiresolution tiles. It is relative to the regular basePath option if it is defined, else it is relative to the location of pannellum.htm. An absolute URL can also be used. */
  basePath: string
  /** This is a format string for the location of the multiresolution tiles, relative to multiRes.basePath, which is relative to basePath. Format parameters are %l for the zoom level, %s for the cube face, %x for the x index, and %y for the y index. For each tile, .extension is appended. */
  path: string
  /** This is a format string for the location of the fallback tiles for the CSS 3D transform-based renderer if the WebGL renderer is not supported, relative to multiRes.basePath, which is relative to basePath. The only format parameter is %s, for the cube face. For each face, .extension is appended. */
  fallback: string
  /** Specifies the tiles' file extension. Do not include the '.'. */
  extension: string
  /** This specifies the size in pixels of each image tile. */
  tileResolution: number
  /** This specifies the maximum zoom level. */
  maxLevel: number
  /** This specifies the size in pixels of the full resolution cube faces the image tiles were created from. */
  cubeResolution: number
  /** Specifies the spherical-harmonic-transform-based preview hash. This is rendered instead of the background color before the base set of cube faces are loaded. */
  shtHash?: string
  /** Specifies a equirectangular preview thumbnail to be rendered instead of the background color or SHT hash before the base set of cube faces are loaded. This image can either be specified as a Base64-encoded string or as an object that can be directly uploaded to a WebGL texture, e.g., ImageData, ImageBitmap, HTMLImageElement, HTMLCanvasElement objects. If a Base64-encoded string is used, the image size should be kept small, since it needs to be loaded with the configuration parameters. */
  equirectangularThumbnail?: ImageData | ImageBitmap | HTMLCanvasElement
  /** This specifies the panorama Type. it will need to be equirectangular in this config type, For cube please switch to PannellumCubeMapConfig and for equirectangular please switch to PannellumEquirectangularConfig*/
  type: 'multires'
}

type PannellumSharedConfig = {
    /** This specifies the panorama type. Can be equirectangular, cubemap, or multires. Defaults to equirectangular */
    type: PannellumPanoramaType
    /** If set, the value is displayed as the panorama's title. If no title is desired, don't set this parameter. */
    title?: string
    /** If set, the value is displayed as the panorama's author. If no author is desired, don't set this parameter. */
    author?: string
    /** If set, the displayed author text is hyperlinked to this URL. If no author URL is desired, don't set this parameter. The author parameter must also be set for this parameter to have an effect. */
    authorURL?: string
    /** Allows user-facing strings to be changed / translated. See defaultConfig.strings definition in pannellum.js for more details. */
    strings?: PannellumStringsDictionary
    /** This specifies a base path to load the images from. */
    basePath?: string
    /** If set to true, device orientation control will be used when the panorama is loaded, if the device supports it. If false, device orientation control needs to be activated by pressing a button. Defaults to false. Note that a secure HTTPS connection is required for device orientation access in most browsers. Additionally, this feature does not work in combination with autoLoad: true in most browsers, since a user interaction is required to prompt for permission. */
    autoLoad?: boolean
    /** Setting this parameter causes the panorama to automatically rotate when loaded. The value specifies the rotation speed in degrees per second. Positive is counter-clockwise, and negative is clockwise. */
    autoRotate?: boolean
    /** Sets the delay, in milliseconds, to start automatically rotating the panorama after user activity ceases. This parameter only has an effect if the autoRotate parameter is set. Before starting rotation, the viewer is panned to the initial pitch. */
    autoRotateInactivityDelay?: number
    /** Sets the delay, in milliseconds, to stop automatically rotating the panorama after it is loaded. This parameter only has an effect if the autoRotate parameter is set. */
    autoRotateStopDelay?: number
    /** If set to true, device orientation control will be used when the panorama is loaded, if the device supports it. If false, device orientation control needs to be activated by pressing a button. Defaults to false. Note that a secure HTTPS connection is required for device orientation access in most browsers. Additionally, this feature does not work in combination with autoLoad: true in most browsers, since a user interaction is required to prompt for permission. */
    orientationOnByDefault?: boolean
    /** If set to false, the zoom controls will not be displayed. Defaults to true. */
    showZoomCtrl?: boolean
    /** If set to false, zooming with keyboard will be disabled. Defaults to true. */
    keyboardZoom?: boolean
    /** If set to false, zooming with mouse wheel will be disabled. Defaults to true. Can also be set to fullscreenonly, in which case it is only enabled when the viewer is fullscreen. Can also be set to ctrl, in which case the ctrl key must be held down to zoom with the mouse wheel (except while the viewer is fullscreen); when the ctrl key is required for mouse wheel zooming, the use of ctrl / shift for zoom control is disabled. */
    mouseZoom?: boolean | 'fullscreenonly'
    /** If set to false, the zoom to click location on double click function will be disabled. Defaults to true. */
    doubleClickZoom?: boolean
    /** If specified, the hotspot can moved using the mouse or by touch. */
    draggable?: boolean
    /** If specified, the hotspot can moved using the mouse or by touch. */
    dragConfirm?: boolean | 'pitch' | 'yaw' | 'both'
    /** Controls the "friction" that slows down the viewer motion after it is dragged and released. Higher values mean the motion stops faster. Should be set (0.0, 1.0]; defaults to 0.15. */
    friction?: number
    /** If set to true, keyboard controls are disabled. Defaults to false. */
    disableKeyboardCtrl?: boolean
    /** If set to false, the fullscreen control will not be displayed. Defaults to true. The fullscreen button will only be displayed if the browser supports the fullscreen API. */
    showFullscreenCtrl?: boolean
    /** If set to false, no controls are displayed. Defaults to true. */
    showControls?: boolean
    /** Adjusts panning speed from touch inputs. Defaults to 1. */
    touchPanSpeedCoeffFactor?: number
    /** Specifies the yaw portion of the hot spot’s location, in degrees. */
    yaw?: number
    /** Sets the panorama’s starting pitch position in degrees. Defaults to 0. */
    pitch?: number
    /** If set to false, one finger can be used to pan viewer. Defaults to false. Can also be set to pitch, yaw, or both. If set to pitch or both, two fingers need to be used to pan vertically (except while the viewer is fullscreen). If set to yaw or both, two fingers need to be used to pan horizontally (except while the viewer is fullscreen). */
    hfov?: number
    /** Sets the minimum yaw the viewer edge can be at, in degrees. Defaults to -180, i.e. no limit. */
    minYaw?: number
    /** Sets the maximum yaw the viewer edge can be at, in degrees. Defaults to 180, i.e. no limit. */
    maxYaw?: number
    /** Sets the minimum / maximum pitch the viewer edge can be at, in degrees. Defaults to undefined, so the viewer center can reach -90 / 90. */
    minPitch?: number
    /** If set to true, prevent displaying out-of-range areas of a partial panorama by constraining the yaw and the field-of-view. Even at the corners and edges of the canvas only areas actually belonging to the image (i.e., within [minYaw, maxYaw] and [minPitch, maxPitch]) are shown, thus setting the backgroundColor option is not needed if this option is set. Defaults to false. */
    maxPitch?: number
    /** Sets the minimum horizontal field of view, in degrees, that the viewer can be set to. Defaults to 50. Unless the multiResMinHfov parameter is set to true, the minHfov parameter is ignored for multires panoramas. */
    minHfov?: number 
    /** Sets the maximum horizontal field of view, in degrees, that the viewer can be set to. Defaults to 120. Unless the multiResMinHfov parameter is set to true, the minHfov parameter is ignored for multires panoramas. */
    maxHfov?: number
    /** When set to false, the minHfov parameter is ignored for multires panoramas; an automatically calculated minimum horizontal field of view is used instead. Defaults to false. */
    multiResMinHfov?: boolean
    /** If true, a compass is displayed. Normally defaults to false; defaults to true if heading information is present in Photo Sphere XMP metadata. */
    compass?: boolean
    /** Set the offset, in degrees, of the center of the panorama from North. As this affects the compass, it only has an effect if compass is set to true. */
    northOffset?: number
    /** Specifies a URL for a preview image to display before the panorama is loaded. */
    preview?: string
    /** Specifies the title to be displayed while the load button is displayed. */
    previewTitle?: string
    /** Specifies the author to be displayed while the load button is displayed. */
    previewAuthor?: string
    /** Specifies roll of image horizon, in degrees (for correcting non-leveled panoramas). */
    horizonPitch?: number
    /** Specifies roll of image horizon, in degrees (for correcting non-leveled panoramas). */
    horizonRoll?: number
    /** (API required)This specifies a timing function to be used for animating movements such as when the lookAt method is called. The default timing function is easeInOutQuad. If a custom function is specified, it should take a number [0, 1] as its only argument and return a number [0, 1]. */
    animationTimingFunction?: ((number: number)=>number)
    /** When true, HTML is escaped from configuration strings to help mitigate possible DOM XSS attacks. This is always true when using the standalone viewer since the configuration is provided via the URL; it defaults to false but can be set to true when using the API. */
    escapeHTML?: boolean
    /** When true, target="_blank" is set on most hyperlinks to open them in new tabs. This is always true when using the standalone viewer since said viewer is often used in an <iframe>, where it doesn't make sense to open the link in the same place. Defaults to false. */
    targetBlank?: boolean
    /** This specifies the type of CORS request used and can be set to either anonymous or use-credentials. Defaults to anonymous. */
    crossOrigin?: PannellumCrossOrigin
    /** This specifies a list (note at end) of hot spots that can be links to other scenes, information, or external links. Each array element has the following properties. (originally listed as dictionary but is not) */
    hotSpots?: PannellumHotSpot[]
    /** When true, the mouse pointer's pitch and yaw are logged to the console when the mouse button is clicked. Defaults to false. */
    hotSpotDebug?: boolean
    /** Specifies the fade duration, in milliseconds, when transitioning between scenes. Not defined by default. Only applicable for tours. Only works with WebGL renderer. */
    sceneFadeDuration?: number
    /** Specifies the key numbers that are captured in key events. Defaults to the standard keys that are used by the viewer. */
    capturedKeyNumbers?: number[]
    /** Specifies an array containing RGB values [0, 1] that sets the background color for areas where no image data is available. Defaults to [0, 0, 0] (black). For partial equirectangular panoramas this applies to areas past the edges of the defined rectangle. For multires and cubemap (including fallback) panoramas this applies to areas corresponding to missing tiles or faces. If set to null, the background is not cleared. */
    backgroundColor?: [number, number, number]
    /** If set to true, prevent displaying out-of-range areas of a partial panorama by constraining the yaw and the field-of-view. Even at the corners and edges of the canvas only areas actually belonging to the image (i.e., within [minYaw, maxYaw] and [minPitch, maxPitch]) are shown, thus setting the backgroundColor option is not needed if this option is set. Defaults to false. The minPitch and maxPitch parameters must be defined if this option is enabled. */
    avoidShowingBackground?: boolean
  }

  /** A key value pairing object. See strings on PannellumSharedConfig or PannellumEquirectangularConfig or PannellumCubeMapConfig or PannellumMultiresConfig*/
  export type PannellumStringsDictionary = {
    //** Key value pairing */
    [key: string]: string
  }

  export type PannellumTour = {
    /** sets the default scene */
    defualt: PannellumDefaultScene
    /** sets the scene key value pairs */
    scenes: PannellumScenes
  }

  export type PannellumDefaultScene = {
    /** required the first scene id */
    firstScene: string
    /** Sets default author. If set, the value is displayed as the panorama's author. If no author is desired, don't set this parameter. */
    author?: string
    /** Sets default Specifies the fade duration, in milliseconds, when transitioning between scenes. Not defined by default. Only applicable for tours. Only works with WebGL renderer. */
    sceneFadeDuration?: number
  }

  /** A multi scene configuration allowing multiple scenes durring init */
  export type PannellumScenes = {
    /** Key value paring for SceneId to scene config */
    [key: string]: PannellumEquirectangularConfig | PannellumCubeMapConfig | PannellumMultiresConfig
  }

  export type PannellumHotSpot = {
    /** Specifies the pitch portion of the hot spot's location, in degrees. */
    pitch: number
    /** Specifies the yaw portion of the hot spot's location, in degrees. */
    yaw: number
    /** Specifies the type of the hot spot. Can be scene for scene links or info for information hot spots. A tour (Scene) configuration file is required for scene hot spots. */
    type: "info" | "scene"
    /** This specifies the text that is displayed when the user hovers over the hot spot. */
    text: string
    /** If specified for an info hot spot, the hot spot links to the specified URL. Not applicable for scene hot spots. */
    URL?: string
    /** Specifies URL's link attributes. If not set, the target attribute is set to _blank, to open link in new tab to avoid opening in viewer frame / page. */
    attributes?: object
    /** Specifies the ID of the scene to link to for scene hot spots. Not applicable for info hot spots. */
    sceneId?: string
    /** Specifies the pitch of the target scene, in degrees. Can also be set to same, which uses the current pitch of the current scene as the initial pitch of the target scene. */
    targetPitch?: number
    /** Specifies the yaw of the target scene, in degrees. Can also be set to same or sameAzimuth. These settings use the current yaw of the current scene as the initial yaw of the target scene; same uses the current yaw directly, while sameAzimuth takes into account the northOffset values of both scenes to maintain the same direction with regard to north. */
    targetYaw?: number
    /** Specifies the HFOV of the target scene, in degrees. Can also be set to same, which uses the current HFOV of the current scene as the initial HFOV of the target scene. */
    targetHfov?: number
    /** Specifies hot spot ID, for use with API's removeHotSpot function. */
    id?: any
    /** If specified, string is used as the CSS class for the hot spot instead of the default CSS classes. */
    cssClass?: string
    /** If createTooltipFunc is specified, this function is used to create the hot spot tooltip DOM instead of the default function. The contents of createTooltipArgs are passed to the function as arguments. */
    createTooltipFunc?: ((createTooltipArgs: object)=> void)
    /** For use with createTooltipFunc. The contents of createTooltipArgs are passed to the createTooltipFunc function as arguments. */
    createTooltipArgs?: object
    /** If clickHandlerFunc is specified, this function is added as an event handler for the hot spot's click, pointerup, and touchend events. The event object and the contents of clickHandlerArgs are passed to the function as arguments. */
    clickHandlerFunc?: ((createArgs: object)=> void)
    /** For use with createTooltipFunc. The event object and the contents of clickHandlerArgs are passed to the createTooltipFunc function as arguments. */
    clickHandlerArgs?: object
    /** If specified, the hotspot can moved using the mouse or by touch. Defaults false */
    draggable?: boolean
    /** If dragHandlerFunc is specified, this function is added as an event handler when dragging of the hotspot starts and ends. The event object and the contents of dragHandlerArgs are passed to the function as arguments. Possible types of the event object are: mousedown, pointerdown, touchend, pointerup, pointerleave, mouseup, and mouseleave. */
    dragHandlerFunc?: ((createArgs: object)=> void)
    /** The event object and the contents of dragHandlerArgs are passed to the function dragHandlerFunc as arguments. */
    dragHandlerArgs?: object
    /** When true, the hot spot is scaled to match changes in the field of view, relative to the initial field of view. Note that this does not account for changes in local image scale that occur due to distortions within the viewport. If set to a number, a fixed scaling is applied relative to the default hot spot size. Defaults to false. */
    scale?: boolean
  }

  export interface PannellumRender{
    /**
     * Initialize renderer.
     * @param haov number Initial horizontal angle of view.
     * @param vaov number Initial vertical angle of view.
     * @param voffset number Initial vertical offset angle.
     * @param callback function Load callback function.
     * @param params Object? Other configuration parameters (horizonPitch, horizonRoll, backgroundColor).
     * @param image  (Image | Array | Object) Input image; format varies based on imageType. For equirectangular, this is an image; for cubemap, this is an array of images for the cube faces in the order [+z, +x, -z, -x, +y, -y]; for multires, this is a configuration object.
     * @param imageType The type of the image: equirectangular, cubemap, or multires.
     * @param dynamic Whether or not the image is dynamic (e.g. video).
     */
    init(haov: number, vaov: number, voffset: number, callback: (()=>void), params?: {horizonPitch?: number, horizonRoll?: number, backgroundColor?: [number, number, number]}, image?: HTMLImageElement | any[] | Object,  imageType?: string, dynamic?: boolean): void
    /** Retrieve renderer’s canvas. */
    getCanvas(): HTMLElement
    /** Check if images are loading. */
    isLoading(): boolean
    /**
     * Render new view of panorama.
     * @param pitch number Pitch to render at (in radians).
     * @param yaw number Yaw to render at (in radians).
     * @param hfov number Horizontal field of view to render with (in radians).
     * @param params Object? Extra configuration parameters.
     * @param params.roll number? Camera roll (in radians).
     * @param params.returnImage boolean? Return rendered image?
     */
    render(pitch: number, yaw: number, hfov: number, params?: { roll?: number, returnImage?: boolean }): void | HTMLImageElement
    /**
     * Set renderer horizon pitch and roll.
     * @param horizonPitch 
     * @param horizonRoll 
     */
    setPose(horizonPitch: number, horizonRoll: number): void
    /**
     * Resize renderer (call after resizing container).
     */
    resize(): void
    /**
     * Destroy renderer.
     */
    destroy(): void
  }

  export interface PannellumViewer {
    /**
     * Check if images are loading.
     * @returns true when loading or false
     */
    isLoading(): boolean
    /**
     * Check if a panorama is loaded.
     * @returns Returns boolean true if a panorama is loaded, else false
     */
    isLoaded(): boolean
    /**
     * Returns the pitch of the center of the view.
     * @returns Returns number Pitch in degrees
     */
    getPitch(): number
    /**
     * Sets the pitch of the center of the view.
     * @param set number Pitch in degrees
     * @param animated (boolean | number) Animation duration in milliseconds or false for no animation (optional, default 1000)
     * @param callback function? Function to call when animation finishes
     * @param callbackArgs object? Arguments to pass to callback function
     * @returns Viewer this
     */
    setPitch(pitch: number, animated: boolean | number, callback?: ((callbackArgs: object)=>void), callbackArgs?: object): PannellumViewer
    /**
     * Returns the minimum and maximum allowed pitches (in degrees).
     * @returns Array<number> [minimum pitch, maximum pitch]
     */
    getPitchBounds(): [min: number, max: number]
    /**
     * Set the minimum and maximum allowed pitches (in degrees).
     * @param bounds [minimum pitch, maximum pitch]
     * @returns Viewer this
     */
    setPitchBounds(bounds: [min: number, max: number]): PannellumViewer
    /**
     * Returns the yaw of the center of the view.
     * @returns number Yaw in degrees
     */
    getYaw(): number
    /**
     * Sets the yaw of the center of the view.
     * @param animated (boolean | number) Animation duration in milliseconds or false for no animation (optional, default 1000)
     * @param callback function? Function to call when animation finishes
     * @param callbackArgs object? Arguments to pass to callback function
     * @returns Viewer this
     */
    setYaw(yaw: number, animated: boolean | number, callback?: ((callbackArgs: object)=>void), callbackArgs?: object): PannellumViewer
    /**
     * Returns the minimum and maximum allowed pitches (in degrees).
     * @returns Array<number> [yaw pitch, maximum yaw]
     */
    getYawBounds(): [min: number, max: number]
    /**
     * Set the minimum and maximum allowed yaws (in degrees [-180, 180]).
     * @param bounds  
     * @returns Viewer this
     */
    setYawBounds(bounds: [min: number, max: number]): PannellumViewer
    /**
     * Returns the horizontal field of view.
     * @returns number Horizontal field of view in degrees
     */
    getHfov(): number
    /**
     * Sets the horizontal field of view.
     * @param set number Horizontal field of view in degrees
     * @param animated (boolean | number) Animation duration in milliseconds or false for no animation (optional, default 1000)
     * @param callback function? Function to call when animation finishes
     * @param callbackArgs object? Arguments to pass to callback function
     * @returns Viewer this
     */
    setHfov(hfov: number, animated: boolean | number, callback?: ((callbackArgs: object)=>void), callbackArgs?: object): PannellumViewer
    /**
     * Returns the minimum and maximum allowed horizontal fields of view (in degrees).
     * @returns Array<number> [minimum hfov, maximum hfov]
     */
    getHfovBounds(): [min: number, max: number]
    /**
     * Set the minimum and maximum allowed horizontal fields of view (in degrees).
     * @param bounds Array<number> [minimum hfov, maximum hfov]
     * @returns Viewer this
     */
    setHfovBounds(bounds: [min: number, max: number]): PannellumViewer
    /**
     * Set a new view. Any parameters not specified remain the same.
     * @param pitch number? Target pitch
     * @param yaw number? Target yaw
     * @param hfov number? Target hfov
     * @param animated (boolean | number) Animation duration in milliseconds or false for no animation (optional, default 1000)
     * @param callback function? Function to call when animation finishes
     * @param callbackArgs object? Arguments to pass to callback function
     * @returns Returns Viewer this
     */
    lookAt(pitch : number, yaw: number, hfov: number, animated: number | boolean, callback?: ((callbackArgs: object)=>void), callbackArgs?: object): PannellumViewer
    /**
     * Returns the panorama’s north offset.
     * @returns Returns number North offset in degrees
     */
    getNorthOffset(): number
    /**
     * Sets the panorama’s north offset.
     * @param heading number North offset in degrees
     * @returns Returns Viewer this
     */
    setNorthOffset(heading: number): PannellumViewer
    /**
     * Returns the panorama’s horizon roll.
     * @returns Returns number Horizon roll in degrees
     */
    getHorizonRoll(): number
    /**
     * Sets the panorama’s horizon roll.
     * @param roll number Horizon roll in degrees [-90, 90]
     * @returns Returns Viewer this
     */
    setHorizonRoll(roll : number): PannellumViewer
    /**
     * Returns the panorama’s horizon pitch.
     * @returns Returns number Horizon pitch in degrees
     */
    getHorizonPitch(): number
    /**
     * Sets the panorama’s horizon pitch.
     * @param pitch number Horizon pitch in degrees [-90, 90]
     * @returns Returns Viewer this
     */
    setHorizonPitch(pitch: number): PannellumViewer
    /**
     * Start auto rotation. Before starting rotation, the viewer is panned to pitch.
     * @param speed number? Auto rotation speed / direction. If not specified, previous value is used.
     * @param pitch number? The pitch to rotate at. If not specified, inital pitch is used.
     * @returns Returns Viewer this
     */
    startAutoRotate(speed?: number, pitch?: number): PannellumViewer
    /**
     * Stop auto rotation.
     * @returns Returns Viewer this
     */
    stopAutoRotate(): PannellumViewer
    /**
     * Stops all movement.
     */
    stopMovement(): void
    /**
     * Returns the panorama renderer.
     * @returns Renderer
     */
    getRenderer(): PannellumRender
    /**
     * Sets update flag for dynamic content.
     * @param force boolean Whether or not viewer should update even when still
     * @returns Viewer this
     */
    setUpdate(force: boolean): PannellumViewer
    /**
     * Calculate panorama pitch and yaw from location of mouse event.
     * @param event MouseEvent Document mouse down event.
     * @returns Array<number> [pitch, yaw]
     */
    mouseEventToCoords(event: MouseEvent):[pitch : number, yaw: number]
    /**
     * Change scene being viewed.
     * @param sceneId string Identifier of scene to switch to.
     * @param pitch number? Pitch to use with new scene
     * @param yaw number? Yaw to use with new scene
     * @param hfov number? HFOV to use with new scene
     * @returns Viewer this
     */
    loadScene(sceneId: string, pitch?: number, yaw?: number, hfov?: number): PannellumViewer
    /**
     * Get ID of current scene.
     * @returns string ID of current scene
     */
    getScene(): string
    /**
     * Add a new scene.
     * @param sceneId string The ID of the new scene
     * @param config string The configuration of the new scene
     * @returns Viewer this
     */
    addScene(sceneId: string, config: PannellumEquirectangularConfig | PannellumCubeMapConfig | PannellumMultiresConfig | PannellumScenes): PannellumViewer
    /**
     * Remove a scene.
     * @param sceneId string The ID of the scene
     * @returns Returns boolean False if the scene is the current scene or if the scene doesn’t exists, else true
     */
    removeScene(sceneId: string): boolean
    /**
     * Toggle fullscreen.
     * @returns Viewer this
     */
    toggleFullscreen(): PannellumViewer
    /**
     * Get configuration of current scene.
     * @returns Object Configuration of current scene
     */
    getConfig():  PannellumEquirectangularConfig | PannellumCubeMapConfig | PannellumMultiresConfig | PannellumScenes
    /**
     * Get viewer’s container element.
     * @returns HTMLElement Container div element
     */
    getContainer(): HTMLElement
    /**
     * Add a new hot spot.
     * @param hs Object The configuration for the hot spot
     * @param sceneId 
     * @returns Viewer this
     */
    addHotSpot(hs: PannellumHotSpot, sceneId?: string): PannellumViewer
    /**
     * Remove a hot spot.
     * @param hotSpotId string The ID of the hot spot
     * @param sceneId string? Removes hot spot from specified scene if provided, else from current scene
     * @returns boolean True if deletion is successful, else false
     */
    removeHotSpot(hotSpotId: string, sceneId?: string): boolean
    /**
     * This method should be called if the viewer’s container is resized.
     */
    resize(): void
    /**
     * Check if device orientation control is supported.
     * @returns boolean True if supported, else false
     */
    isOrientationSupported(): boolean
    /**
     * Stop using device orientation.
     */
    stopOrientation(): void
    /**
     * Start using device orientation (does nothing if not supported).
     */
    startOrientation(): void
    /**
     * Check if device orientation control is currently activated.
     * @returns boolean True if active, else false
     */
    isOrientationActive(): boolean
    /**
     * Subscribe listener to specified event.
     * @param type string Type of event to subscribe to.
     * @param callback Function Listener function to subscribe to event.
     * @returns Viewer this
     */
    on(type: PannellumEventType, callback: ((event: Event)=>void)): PannellumRender
    /**
     * Subscribe listener to specified event.
     * @param type string Type of event to subscribe to.
     * @param callback Function Listener function to subscribe to event.
     * @returns Viewer this
     */
    off(type?: PannellumEventType, callback?: ((event: Event)=>void)): PannellumViewer
    destroy(): void
  }

  /**
   * Extended global with extended window
   */
  declare global {
    /**
     * Extended window with pannellum access added via interface
     */
    interface Window { 
      /**
       * Pannellum accessor interface extention from window as a defined PannellumFactories interface
       */
      pannellum: PannellumFactories
    }
  }

  /**
    * Export of Pannellum accessor interface extention from window as a defined PannellumFactories interface
    */
  export interface Window { 
    pannellum: PannellumFactories
  }

  /**
   * A interface to access the Pennellum factory functions
   */
  export interface PannellumFactories {
    /**
     * Creates a new panorama viewer.
     * @param container (HTMLElement | string) The container (div) element for the viewer, or its ID.
     * @param config Object Inital configuration for viewer. See PannellumEquirectangularConfig | PannellumCubeMapConfig | PannellumMultiresConfig | PannellumTour for more
     * @returns new viewer instance accessable via the PannellumViewer interface
     */
    viewer(container: string | HTMLElement, config: PannellumEquirectangularConfig | PannellumCubeMapConfig | PannellumMultiresConfig | PannellumTour): PannellumViewer;
    /**
     * Creates a new panorama renderer.
     * @param container HTMLElement The container element for the renderer.
     * @returns new viewer instance accessable via the PannellumRender interface
     */
    Renderer(container: HTMLElement): PannellumRender
  }
