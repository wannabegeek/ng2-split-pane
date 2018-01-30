import { Component, OnInit } from '@angular/core';
import { SplitSeparatorComponent } from './split-pane-separator.component'

@Component({
  selector: 'horizontal-split-separator',
  styles: [`
    :host {
      cursor: ns-resize;
    }

    .default-separator {
      background-color: #fff;
      border-top: 1px solid #ddd;
      position: relative;
    }
    .default-separator:hover {
      background-color: #fafafa;
    }

    .invisible-extension {
      position: absolute;
      height: 100%;
      width: 100%;
      min-height: 7px;
    }

    .handle {
      width: 35px;
      height: 100%;
      background-color: #eee;
      margin: auto;
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
    '[style.height.px]': 'thickness'
  }
})
export class HorizontalSplitSeparatorComponent
  extends SplitSeparatorComponent
  implements OnInit {

  ngAfterViewInit() {
    if (this.invisibleExtension) {
      this.invisibleExtension.nativeElement.style.top =
        -(7 - this.thickness) / 2 + "px";
    }
  }

}
