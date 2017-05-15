import { Component, OnInit, ViewChild, ElementRef, HostListener, EventEmitter, Input, Output } from '@angular/core';
import { SplitPaneComponent } from './split-pane.component'
import { PositionService } from './position.service'

@Component({
  selector: 'vertical-split-pane',
  styles: [`
    .v-outer {
      height: 100%;
      width: 100%;
      display: flex;
    }

    .left-component {
      width: calc(50% - 4px);
    }

    .right-component {
      width: calc(50% - 4px);
    }
  `],
  template: `
  <div #outer class="v-outer">
    <div
      #primaryComponent
      [hidden]="primaryToggledOff"
      class="left-component">
      <ng-content select=".split-pane-content-primary"></ng-content>
    </div>
    <vertical-split-separator
      #separator
      [hidden]="primaryToggledOff || secondaryToggledOff"
      [thickness]="separatorThickness"
      (notifyWillChangeSize)="notifyWillChangeSize($event)">
    </vertical-split-separator>
    <div
      #secondaryComponent
      [hidden]="secondaryToggledOff"
      class="right-component">
      <ng-content select=".split-pane-content-secondary"></ng-content>
    </div>
  </div>
  `,
})
export class VerticalSplitPaneComponent extends SplitPaneComponent {

  @ViewChild('outer') outerContainer: ElementRef;

  getTotalSize(): number {
    return this.outerContainer.nativeElement.offsetWidth;
  }

  getPrimarySize(): number {
    return this.primaryComponent.nativeElement.offsetWidth;
  }

  getSecondarySize(): number {
    return this.secondaryComponent.nativeElement.offsetWidth;
  }

  dividerPosition(size: number) {
    const sizePct = (size / this.getTotalSize()) * 100;
    this.primaryComponent.nativeElement.style.width = sizePct + "%";
    this.secondaryComponent.nativeElement.style.width =
      "calc(" + (100 - sizePct) + "% - " + 
      (this.primaryToggledOff || this.secondaryToggledOff ? 0 : this.separatorThickness) + "px)";
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
      if (this.isResizing) {
        let coords = PositionService.offset(this.primaryComponent);
        this.applySizeChange(event.pageX - coords.left);
        return false;
      }
    }
}
