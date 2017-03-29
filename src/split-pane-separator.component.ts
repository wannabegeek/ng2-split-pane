import { Component, OnInit, HostListener, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
})
export class SplitSeparatorComponent implements OnInit {

  @Input() protected thickness: number;
  @Output() private notifyWillChangeSize: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('invisibleExtension') protected invisibleExtension: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event) {
    this.notifyWillChangeSize.emit(true);
    return false;
  }
}
