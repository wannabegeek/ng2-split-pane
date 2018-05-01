import { ElementRef } from '@angular/core';
export declare class PositionService {
    static position(element: ElementRef): {
        width: number;
        height: number;
        top: number;
        left: number;
    };
    static offset(element: ElementRef): {
        width: number;
        height: number;
        top: number;
        left: number;
    };
    static positionElements(host: ElementRef, target: ElementRef, positionStr: any, appendToBody: any): {
        top: number;
        left: number;
    };
    private static readonly window;
    private static readonly document;
    private static getStyle(nativeEl, cssProp);
    private static isStaticPositioned(nativeEl);
    private static parentOffsetEl(nativeEl);
}
