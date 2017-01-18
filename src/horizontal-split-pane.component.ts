import { Component, OnInit, ViewChild, ElementRef, HostListener, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { SplitPaneComponent } from './split-pane.component'
import { PositionService } from './position.service'

@Component({
  selector: 'horizontal-split-pane',
  styles: [`
    .outer {
      height: 100%;
      width: 100%;
      position: releative;
    }

    .upper-component {
      height: calc(50% - 4px);
      position: relative;
    }

    .lower-component {
      height: calc(50% - 4px);
      position: relative;
    }
  `],
  template: `
  <div #outer class="outer">
    <div #primaryComponent class="upper-component">
      <ng-content select=".split-pane-content-primary"></ng-content>
    </div>
    <horizontal-split-separator #separator (notifyWillChangeSize)="notifyWillChangeSize($event)"></horizontal-split-separator>
    <div #secondaryComponent class="lower-component">
      <ng-content select=".split-pane-content-secondary"></ng-content>
    </div>
  </div>
  `,
  host: {'style': 'height: 100%'}
})
export class HorizontalSplitPaneComponent extends SplitPaneComponent {

  @ViewChild('outer') protected outerContainer: ElementRef;

  protected getTotalSize(): number {
    return this.outerContainer.nativeElement.offsetHeight;
  }

  protected getPrimarySize(): number {
    return this.primaryComponent.nativeElement.offsetHeight;
  }

  protected getSecondarySize(): number {
    return this.secondaryComponent.nativeElement.offsetHeight;
  }

  protected dividerPosition(size: number) {
    const sizePct = (size / this.getTotalSize()) * 100.0;
    this.primaryComponent.nativeElement.style.height = sizePct + "%";
    this.secondaryComponent.nativeElement.style.height = "calc(" + (100 - sizePct) + "% - 8px)";
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
      if (this.isResizing) {
        let coords = PositionService.offset(this.primaryComponent);
        this.applySizeChange(event.pageY - coords.top);
      }
      return false;
    }
}
