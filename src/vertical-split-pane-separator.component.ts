import { Component } from '@angular/core';
import { SplitSeparatorComponent } from './split-pane-separator.component'

@Component({
  selector: 'vertical-split-separator',
  styles: [`
    .pane-splitter {
      height: 100%;
      width: 7px;
      background-color: #fff;
      border-left: 1px solid #ddd;
      cursor: ew-resize;
      float: left;
    }
    .pane-splitter:hover {
      background-color: #fafafa;
    }
    .handle {
      width: 100%;
      height: 35px;
      background-color: #eee;
      position: relative;
      top: calc(50% - 17px);
    }
  `],
  template: `
    <div class="pane-splitter">
      <div class="handle">
      </div>
    </div>
  `,
  host: {'style': 'height: 100%'}
})
export class VerticalSplitSeparatorComponent extends SplitSeparatorComponent {
}
