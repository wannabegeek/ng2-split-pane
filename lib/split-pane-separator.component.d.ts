import { OnInit, EventEmitter, ElementRef } from '@angular/core';
export declare class SplitSeparatorComponent implements OnInit {
    thickness: number;
    notifyWillChangeSize: EventEmitter<boolean>;
    invisibleExtension: ElementRef;
    constructor();
    ngOnInit(): void;
    onMousedown(event: any): boolean;
    ontouchstart(event: any): boolean;
}
