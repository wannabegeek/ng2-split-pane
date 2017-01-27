import { Component, OnInit, HostListener, EventEmitter, Output } from '@angular/core';

@Component({
})
export class SplitSeparatorComponent implements OnInit {

  @Output() private notifyWillChangeSize: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event) {
    this.notifyWillChangeSize.emit(true);
    return false;
  }
}
