import { Component, OnInit } from '@angular/core';
import { SplitSeparatorComponent } from './split-pane-separator.component'

@Component({
  selector: 'vertical-split-separator',
  styles: [`
    :host {
      background-color: #fff;
      border-left: 1px solid #ddd;
      cursor: ew-resize;
      position: relative;
    }
    :host:hover {
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
    <!-- Used to extend the 'draggable' area in case the separator is too thin,
    so it's not too hard to drag. -->
    <div
      #invisibleExtension
      [hidden]="thickness >= 7"
      class="invisible-extension"></div>

    <div class="handle"></div>
  `,
  host: {
    '[style.width.px]': 'thickness'
  }
})
export class VerticalSplitSeparatorComponent
  extends SplitSeparatorComponent
  implements OnInit {

  ngAfterViewInit() {
    this.invisibleExtension.nativeElement.style.left =
      -(7 - this.thickness) / 2 + "px";
  }
}
