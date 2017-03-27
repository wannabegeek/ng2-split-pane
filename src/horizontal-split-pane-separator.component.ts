import { Component, OnInit } from '@angular/core';
import { SplitSeparatorComponent } from './split-pane-separator.component'

@Component({
  selector: 'horizontal-split-separator',
  styles: [`
    :host {
      background-color: #fff;
      border-top: 1px solid #ddd;
      cursor: ns-resize;
      position: relative;
    }
    :host:hover {
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
    <!-- Used to extend the 'draggable' area in case the separator is too thin,
    so it's not too hard to drag. -->
    <div
      #invisibleExtension
      [hidden]="thickness >= 7"
      class="invisible-extension"></div>

    <div class="handle"></div>
  `,
  host: {
    '[style.height.px]': 'thickness'
  }
})
export class HorizontalSplitSeparatorComponent
  extends SplitSeparatorComponent
  implements OnInit {

  ngAfterViewInit() {
    this.invisibleExtension.nativeElement.style.top =
      -(7 - this.thickness) / 2 + "px";
  }

}
