import { ElementRef } from '@angular/core';
import { SplitPaneComponent } from './split-pane.component';
export declare class VerticalSplitPaneComponent extends SplitPaneComponent {
    outerContainer: ElementRef;
    getTotalSize(): number;
    getPrimarySize(): number;
    getSecondarySize(): number;
    dividerPosition(size: number): void;
    onMousemove(event: MouseEvent): boolean;
    onTouchmove(event: TouchEvent): boolean;
}
