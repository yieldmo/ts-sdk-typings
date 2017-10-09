// Type definitions for Yieldmo SDK (Formats)
// Project: ts-sdk

/*~ This is the module template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

/*~ The ts-sdk is exposed as a global variable 'YM_SDK' in the format's window
 */
export as namespace YM_SDK;

/*~ Public methods and properties
 */
export function addClickTrackers(placementId: string, clicktrackers: string[]): void;
export function appendAdChoices(_placementContainer: HTMLElement): void;
export function attachClickEventHandlers(documentContext: Document): void;
export function attachFormatEventListener(placementWindow: PlacementWindow, eventName: string, listener: Function): boolean;
export function chkPls(isPublisherRequested: boolean): void;
export function detachFormatEventListener(placementWindow: PlacementWindow, eventName: string, listener: Function): void;
export function doesSupportEvent(eventName: string): boolean;
export function environmentTopWindow(): Window | null;
export const FormatLog: Log;
export function getBoundingClientRect(node: HTMLElement): BoundingClientRect;
export function getClientGeolocation(successCallback: Function, failureCallback?: PositionErrorCallback): void;
export function getCurrentFormatPosition(formatIframe: HTMLIFrameElement): ScrollEventMessage | null;
export function isAMP(): boolean;
export function isAndroid(): boolean;
export function isDFP(): boolean;
export function isIOS(): boolean;
export function requestFullScreenMode(formatIframe: HTMLIFrameElement): void;
export function resetDimensions(formatIframe: HTMLIFrameElement): boolean;
export function topElem(): HTMLBodyElement | HTMLHeadElement;
export function trackEv(type: string, startTime: string | number, eventData: any, formatWindow: PlacementWindow): void;
export function trackError(message: string, formatWindow: PlacementWindow): void;
export function availableEnvironmentFeatures(): AvailableFeatures;
export function clearPlacement(placementWindow: PlacementWindow): void;

export interface PlacementWindow extends Window {
  YM_SDK: any;
  YMHandlebars: any;
}

/**
 * Supported features of the environment
 */
export interface AvailableFeatures {
  fullScreen: boolean;
  smoothScroll: boolean;
}

export interface BoundingClientRect {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
}

export interface ScrollEventMessage {
  boundingFormatRect: BoundingClientRect | null;
  x: number;
  y: number;
  screenHeight: number;
  screenWidth: number;
}

export interface Log {
  getLogLevel(): LogLevel;
  warn(...logArgs: Object[]): void;
  error(...logArgs: Object[]): void;
  info(...logArgs: Object[]): void;
  debug(...logArgs: Object[]): void;
  setLevel(logLevel: LogLevel): void;
}

export enum LogLevel {
  None = 0, // no logging
  Error, // log only serious errors
  Warn, // also log messages that indicate potential problems
  Info, // also log informational messages
  Debug, // log many debugging messages
}
