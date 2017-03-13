import {
    Component, ViewChild, ElementRef, HostListener, EventEmitter, Input,
    Output, OnChanges, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'split-pane',
  host: {'style': 'height: 100%'}
})
export abstract class SplitPaneComponent implements OnChanges {

  @ViewChild('primaryComponent') protected primaryComponent: ElementRef;
  @ViewChild('secondaryComponent') protected secondaryComponent: ElementRef;

  @Input('primary-component-initialratio') protected initialRatio: number = 0.5;
  @Input('primary-component-minsize') protected primaryMinSize: number = 0;
  @Input('secondary-component-minsize') protected secondaryMinSize: number = 0;
  @Input('primary-component-toggled-off') protected primaryToggledOff: boolean = false;
  @Input('secondary-component-toggled-off') protected secondaryToggledOff: boolean = false;
  @Input('local-storage-key') private localStorageKey: string = null;
  @Output('on-change') private notifySizeDidChange: EventEmitter<any> = new EventEmitter<any>();
  @Output('on-begin-resizing') private notifyBeginResizing: EventEmitter<any> = new EventEmitter<any>();
  @Output('on-ended-resizing') private notifyEndedResizing: EventEmitter<any> = new EventEmitter<any>();

  private primarySizeBeforeTogglingOff: number;
  private dividerSize: number = 8.0;
  protected isResizing: boolean = false;

  ngAfterViewInit() {
    this.checkBothToggledOff();

    if (!this.primaryToggledOff && !this.secondaryToggledOff) {
      let ratio: number = this.initialRatio;
      if (this.localStorageKey != null) {
        let ratioStr = localStorage.getItem(this.localStorageKey);
        if (ratioStr != null) {
          ratio = JSON.parse(ratioStr);
        }
      }

      let size = ratio * this.getTotalSize();
      this.applySizeChange(size);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.checkBothToggledOff();

    if (changes['primaryToggledOff']) {
      if (changes['primaryToggledOff'].currentValue === true) {
        this.primarySizeBeforeTogglingOff = this.getPrimarySize();
        this.applySizeChange(0);
      } else {
        this.applySizeChange(this.primarySizeBeforeTogglingOff);
      }
    } else if (changes['secondaryToggledOff']) {
      if (changes['secondaryToggledOff'].currentValue === true) {
        this.primarySizeBeforeTogglingOff = this.getPrimarySize();
        this.applySizeChange(this.getTotalSize());
      } else {
        this.applySizeChange(this.primarySizeBeforeTogglingOff);
      }
    }
  }

  protected abstract getTotalSize(): number;
  protected abstract getPrimarySize(): number;
  protected abstract getSecondarySize(): number;
  protected abstract dividerPosition(size: number);

  protected getAvailableSize(): number {
    return this.getTotalSize() - this.dividerSize;
  }

  protected applySizeChange(size: number) {
    let primarySize = this.checkValidBounds(
      size, this.primaryMinSize,
      this.getAvailableSize() - this.secondaryMinSize);

    if (this.primaryToggledOff) {
      primarySize = 0;
    } else if (this.secondaryToggledOff) {
      primarySize = this.getTotalSize();
    }

    this.dividerPosition(primarySize);
    this.notifySizeDidChange.emit({'primary' : this.getPrimarySize(), 'secondary' : this.getSecondarySize()});
  }

  private notifyWillChangeSize(resizing: boolean) {
    this.isResizing = resizing;
    this.notifyBeginResizing.emit();
  }

  private checkValidBounds(newSize: number, minSize: number, maxSize: number): number {
    return newSize >= minSize 
            ? (newSize <= maxSize) 
                ? newSize 
                : maxSize 
            : minSize;
  }

  private checkBothToggledOff() {
    // We do not allow both the primary and secondary content to be toggled off
    // at the same time, because then it would be very confusing.
    if (this.primaryToggledOff && this.secondaryToggledOff) {
      throw('You cannot toggle off both the primary and secondary component');
    }
  }

  private stopResizing() {
    this.isResizing = false;
    this.primaryComponent.nativeElement.style.cursor = "auto";
    this.secondaryComponent.nativeElement.style.cursor = "auto";

    if (this.localStorageKey != null) {
      let ratio = this.getPrimarySize() / (this.getTotalSize());
      localStorage.setItem(this.localStorageKey, JSON.stringify(ratio));
    }

    this.notifyEndedResizing.emit();
  }

  @HostListener('mouseup', ['$event'])
  onMouseup(event) {
    this.stopResizing()
    return false;
  }
}
