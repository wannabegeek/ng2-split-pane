import { Component } from '@angular/core';
import { SplitSeparatorComponent } from './split-pane-separator.component'

@Component({
  selector: 'vertical-split-separator',
  styles: [`
    .pane-splitter {
      width: 7px;
      height: 100%;
      background-color: #fff;
      border-left: 1px solid #ddd;
      cursor: ew-resize;
      position: relative;
    }
    .pane-splitter:hover {
      background-color: #fafafa;
    }

    .pane-splitter .handle {
      width: 100%;
      height: 35px;
      background-color: #eee;
      position: absolute;
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
