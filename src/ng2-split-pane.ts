import { NgModule, ModuleWithProviders } from '@angular/core';

import { HorizontalSplitSeparatorComponent } from './horizontal-split-pane-separator.component';
import { VerticalSplitSeparatorComponent } from './vertical-split-pane-separator.component';
import { HorizontalSplitPaneComponent } from './horizontal-split-pane.component';
import { VerticalSplitPaneComponent } from './vertical-split-pane.component';
import { SplitSeparatorComponent } from "./split-pane-separator.component";
import { SplitPaneComponent } from "./split-pane.component";

export function delayedInit(): ModuleWithProviders<SplitPaneModule> {
  return {
    ngModule: SplitPaneModule,
    providers: []
  }
}

@NgModule({
  declarations: [
    HorizontalSplitPaneComponent,
    VerticalSplitPaneComponent,
    HorizontalSplitSeparatorComponent,
    VerticalSplitSeparatorComponent,
    SplitSeparatorComponent,
    SplitPaneComponent
  ],
  exports: [HorizontalSplitPaneComponent, VerticalSplitPaneComponent]
})
export class SplitPaneModule {
  static forRoot = delayedInit();
}
