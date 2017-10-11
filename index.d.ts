
// Type definitions for YM_SDK (web-formats)
// Project: ts-sdk

/**
 * The ts-sdk is exposed as a global variable 'YM_SDK' in the format's window
 */
export as namespace YM_SDK;

/**
 * Public methods and properties exposed for web-formats
 */

/**
 * Adds clicktrackers to a placement's creatives' existing configurables.clicktrackers
 *
 * @param placementId
 * @param clicktrackers
 */
export function addClickTrackers(placementId: string, clicktrackers: string[]): void;

/**
 * Legacy no-op method, still being called by format 30 (Map)
 *
 * @param _placementContainer html element containing the format's iframey
 */
export function appendAdChoices(_placementContainer: HTMLElement): void;

/**
 * Adds click event handlers to all CTA anchor tags within a format.
 *
 * @param documentContext The format's document
 */
export function attachClickEventHandlers(documentContext: Document): void;

/**
 * Adds an event listener through the YM_SDK object, for events which need to be proxied through the sdk
 *
 * @param placementWindow the format's window
 * @param eventName type of event
 * @param listener function to fire when event is triggered
 * @returns true if successfully subscribed to the event, false otherwise
 */
export function attachFormatEventListener(placementWindow: PlacementWindow, eventName: string, listener: Function): boolean;

/**
 * Cleanly removes a listener for an event that was proxied through the YM_SDK
 *
 * @param placementWindow the format's window
 * @param eventName type of event
 * @param listener the callback that was registered for the event
 */
export function detachFormatEventListener(placementWindow: PlacementWindow, eventName: string, listener: Function): void;

/**
 * Indicates whether an event is supported by the current environment
 *
 * @param eventName type of event
 * @returns true if supported, false otherwise
 */
export function doesSupportEvent(eventName: string): boolean;

/**
 * Returns the topmost window we have access to in the current environment
 *
 * @returns the topmost window we can access, or null if we do not have an environment manager
 */
export function environmentTopWindow(): Window | null;

/**
 * Logging static utility class
 */
export const FormatLog: Log;

/**
 * Fetches the bounding client rectangle of the given node, representing its position on the page,
 * including any environment-specific offsets
 *
 * @param node whose bounding client rect we want
 * @returns a bounding client rect
 */
export function getBoundingClientRect(node: HTMLElement): BoundingClientRect;

/**
 * Invokes the successCallback and provides geolocation if geolocation is available, otherwise if a failureCallback
 * is given, calls that instead.
 *
 * @param successCallback function to call in case of success
 * @param failureCallback? optional function to call in case of failure
 */
export function getClientGeolocation(successCallback: Function, failureCallback?: PositionErrorCallback): void;

/**
 * Returns a ScrollEventMessage with the element's boundingClientRect and its scroll position.
 *
 * @param formatIframe the format's iframe
 * @returns returns a ScrollEventMessage or null in rare instances where positioning info is unavailable
 */
export function getCurrentFormatPosition(formatIframe: HTMLIFrameElement): ScrollEventMessage | null;

/**
 * Determines if we are inside an Amp environment
 *
 * @returns true if Amp, false otherwise
 */
export function isAMP(): boolean;

/**
 * Determines if we are running on an Android device
 *
 * @returns true if Android, false otherwise
 */
export function isAndroid(): boolean;

/**
 * Determines if we are inside a Dfp environment
 *
 * @returns true if Dfp, false otherwise
 */
export function isDFP(): boolean;

/**
 * Determines if we are running on an iOS device
 *
 * @returns true if iOS, false otherwise
 */
export function isIOS(): boolean;

/**
 * Prepares format iframe and parent container iframes to allow full screen mode
 *
 * @param formatIframe the format's iframe
 */
export function requestFullScreenMode(formatIframe: HTMLIFrameElement): void;

/**
 * Resizes our placement based on the current size of the content inside the format's iframe
 *
 * @param formatIframe the format's iframe
 * @returns true if successfully resized, false otherwise
 */
export function resetDimensions(formatIframe: HTMLIFrameElement): boolean;

/**
 * Returns the top <body> tag of the current environment's topmost accessible window, or the current document's <head> tag as a fallback
 *
 * @returns top accessible body or head element in the current environment
 */
export function topElem(): HTMLBodyElement | HTMLHeadElement;

/**
 * Reports an event to the ad server.
 *
 * @param kind format event kind
 * @param startTime date when event began
 * @param eventData key/value pairs from format for event
 * @param formatWindow the window of the placement that owns the event
 * @param creativeIds? send creative Ids with the event. If an event in the result of interaction with specific creatives, send an array of strings.
 * Otherwise, true sends all creative ids.
*/
export function trackEv(type: string, startTime: string | number, eventData: any, formatWindow: PlacementWindow,
  creativeIds?: boolean | string[]): void;

/**
 * Notifies the ad-server of an error being recorded.
 *
 * @param message error message
 * @param formatWindow the format's window
 */
export function trackError(message: string, formatWindow: PlacementWindow): void;

/**
 * @returns supported features of the environment.
 * Smooth scroll indicates that we receive frequent position updates,
 * Full screen indicates full screen videos are available.
 */
export function availableEnvironmentFeatures(): AvailableFeatures;

/**
 * Clears a placement.
 *
 * Removes the inner html from an element.
 * Clears all events from a placement.
 * Removes style, and attributes evs and rend
 *
 * @param placementWindow the format's window
 */
export function clearPlacement(placementWindow: PlacementWindow): void;

/**
 * Type representing properties available to access within the format's window
 */
export interface PlacementWindow extends Window {
  YM_SDK: any;
  YMHandlebars: any;
}

/**
 * Supported features of the environment returned by YM_SDK.availableEnvironmentFeatures
 */
export interface AvailableFeatures {
  fullScreen: boolean;
  smoothScroll: boolean;
}

/**
 * BoundingClientRect type containing positioning information returned by YM_SDK.getBoundingClientRect
 */
export interface BoundingClientRect {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
}

/**
 * ScrollEventMessage containing positioning and viewport information and returned by YM_SDK.getCurrentFormatPosition
 */
export interface ScrollEventMessage {
  boundingFormatRect: BoundingClientRect | null;
  x: number;
  y: number;
  screenHeight: number;
  screenWidth: number;
}

/**
 * Static class for logging with different levels of granularity
 */
export interface Log {
  /**
   * Gets the current log level
   * @static
   * @returns The current log level
   */
  getLogLevel(): LogLevel;

  /**
   * Log a potential problem
   * @static
   * @param logArgs arguments to log
   */
  warn(...logArgs: Object[]): void;

  /**
   * Log a serious error
   * @static
   * @param logArgs arguments to log
   */
  error(...logArgs: Object[]): void;

  /**
   * Log an informational message
   * @static
   * @param logArgs arguments to log
   */
  info(...logArgs: Object[]): void;

  /**
   * Log a message useful only for debugging
   * @static
   * @param logArgs arguments to log
   */
  debug(...logArgs: Object[]): void;

  /**
   * Set amount of log messages
   * @static
   * @param logLevel log messages at level and above
   */
  setLevel(logLevel: LogLevel): void;
}

/**
 * Enum representing different logging levels. Returned by YM_SDK.FormatLog.getLogLevel and
 * used to set your logging preference with YM_SDK.FormatLog.setLevel
 */
export enum LogLevel {
  None = 0, // no logging
  Error, // log only serious errors
  Warn, // also log messages that indicate potential problems
  Info, // also log informational messages
  Debug, // log many debugging messages
}
