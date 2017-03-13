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

  @ViewChild('outer') protected outerContainer: ElementRef;

  protected getTotalSize(): number {
    return this.outerContainer.nativeElement.offsetWidth;
  }

  protected getPrimarySize(): number {
    return this.primaryComponent.nativeElement.offsetWidth;
  }

  protected getSecondarySize(): number {
    return this.secondaryComponent.nativeElement.offsetWidth;
  }

  protected dividerPosition(size: number) {
    const sizePct = (size / this.getTotalSize()) * 100;
    this.primaryComponent.nativeElement.style.width = sizePct + "%";
    this.secondaryComponent.nativeElement.style.width = "calc(" + (100 - sizePct) + "% - 8px)";
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
      if (this.isResizing) {
        let coords = PositionService.offset(this.primaryComponent);
        this.applySizeChange(event.pageX - coords.left);
      }
      return false;
    }
}
