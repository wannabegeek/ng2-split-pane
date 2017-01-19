import { Component } from '@angular/core';
import { SplitSeparatorComponent } from './split-pane-separator.component'

@Component({
  selector: 'vertical-split-separator',
  styles: [`
    :host {
      width: 7px;
      height: 100%;
      background-color: #fff;
      border-left: 1px solid #ddd;
      cursor: ew-resize;
      position: relative;
    }
    :host:hover {
      background-color: #fafafa;
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
    <div class="handle"></div>
  `
})
export class VerticalSplitSeparatorComponent extends SplitSeparatorComponent {
}
