import { Component, OnInit } from '@angular/core';
import { SplitSeparatorComponent } from './split-pane-separator.component'

@Component({
  selector: 'vertical-split-separator',
  styles: [`
    :host {
      cursor: ew-resize;
    }

    .default-separator {
      background-color: #fff;
      border-left: 1px solid #ddd;
      position: relative;
    }
    .default-separator:hover {
      background-color: #fafafa;
    }

    .invisible-extension {
      position: absolute;
      height: 100%;
      width: 100%;
      min-width: 7px;
    }

    .handle {
      width: 100%;
      height: 35px;
      background-color: #eee;
      position: absolute;
      top: calc(50% - 17px);
    }
  `],
  template: `
    <div class="custom-template" #ref>
      <ng-content select=".split-pane-content-separator"></ng-content>
    </div>
    <div class="default-separator" *ngIf="ref.children.length == 0">
      <!-- Used to extend the 'draggable' area in case the separator is too thin,
        so it's not too hard to drag. -->
      <div
        #invisibleExtension
        [hidden]="thickness >= 7"
        class="invisible-extension"></div>

      <div class="handle"></div>
    </div>
  `,
  host: {
    '[style.width.px]': 'thickness'
  }
})
export class VerticalSplitSeparatorComponent
  extends SplitSeparatorComponent
  implements OnInit {

  ngAfterViewInit() {
    if (this.invisibleExtension) {
      this.invisibleExtension.nativeElement.style.left =
        -(7 - this.thickness) / 2 + "px";
    }
  }
}
