import { Component, OnInit, ViewChild, ElementRef, HostListener, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { SplitPaneComponent } from './split-pane.component'
import { PositionService } from './position.service'

@Component({
  selector: 'horizontal-split-pane',
  styles: [`
    .h-outer {
      height: 100%;
      width: 100%;
      display: flex;
      flex-flow: column;
    }

    .upper-component {
      height: calc(50% - 4px);
    }

    .lower-component {
      height: calc(50% - 4px);
    }
  `],
  template: `
  <div #outer class="h-outer">
    <div
      #primaryComponent
      [hidden]="primaryToggledOff"
      class="upper-component">
      <ng-content select=".split-pane-content-primary"></ng-content>
    </div>
    <horizontal-split-separator
      #separator
      [hidden]="primaryToggledOff || secondaryToggledOff"
      [thickness]="separatorThickness"
      (notifyWillChangeSize)="notifyWillChangeSize($event)">
    </horizontal-split-separator>
    <div
      #secondaryComponent
      [hidden]="secondaryToggledOff"
      class="lower-component">
      <ng-content select=".split-pane-content-secondary"></ng-content>
    </div>
  </div>
  `,
})
export class HorizontalSplitPaneComponent extends SplitPaneComponent {

  @ViewChild('outer') outerContainer: ElementRef;
  @Input() test: number;

  getTotalSize(): number {
    return this.outerContainer.nativeElement.offsetHeight;
  }

  getPrimarySize(): number {
    return this.primaryComponent.nativeElement.offsetHeight;
  }

  getSecondarySize(): number {
    return this.secondaryComponent.nativeElement.offsetHeight;
  }

  dividerPosition(size: number) {
    const sizePct = (size / this.getTotalSize()) * 100.0;
    this.primaryComponent.nativeElement.style.height = sizePct + "%";
    this.secondaryComponent.nativeElement.style.height =
      "calc(" + (100 - sizePct) + "% - " + 
      (this.primaryToggledOff || this.secondaryToggledOff ? 0 : this.separatorThickness) + "px)";
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
      if (this.isResizing) {
        let coords = PositionService.offset(this.primaryComponent);
        this.applySizeChange(event.pageY - coords.top);
        return false;
      }
    }
}
