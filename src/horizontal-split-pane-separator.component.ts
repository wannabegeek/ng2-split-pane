import { Component } from '@angular/core';
import { SplitSeparatorComponent } from './split-pane-separator.component'

@Component({
  selector: 'horizontal-split-separator',
  styles: [`
    :host {
      height: 7px;
      background-color: #fff;
      border-top: 1px solid #ddd;
      cursor: ns-resize;
    }
    :host:hover {
      background-color: #fafafa;
    }
    .handle {
      width: 35px;
      height: 100%;
      background-color: #eee;
      margin: auto;
    }
  `],
  template: `
    <div class="handle"></div>
  `
})
export class HorizontalSplitSeparatorComponent extends SplitSeparatorComponent {
}
