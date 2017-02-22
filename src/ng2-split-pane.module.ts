import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorizontalSplitSeparatorComponent } from './horizontal-split-pane-separator.component';
import { VerticalSplitSeparatorComponent } from './vertical-split-pane-separator.component';
import { HorizontalSplitPaneComponent } from './horizontal-split-pane.component';
import { VerticalSplitPaneComponent } from './vertical-split-pane.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HorizontalSplitPaneComponent,
    VerticalSplitPaneComponent,
    HorizontalSplitSeparatorComponent,
    VerticalSplitSeparatorComponent
  ],
  exports: [HorizontalSplitPaneComponent, VerticalSplitPaneComponent]
})
export class SplitPaneModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SplitPaneModule,
      providers: []
    }
  }
}