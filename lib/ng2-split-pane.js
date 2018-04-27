"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var horizontal_split_pane_separator_component_1 = require("./horizontal-split-pane-separator.component");
var vertical_split_pane_separator_component_1 = require("./vertical-split-pane-separator.component");
var horizontal_split_pane_component_1 = require("./horizontal-split-pane.component");
var vertical_split_pane_component_1 = require("./vertical-split-pane.component");
var split_pane_separator_component_1 = require("./split-pane-separator.component");
var split_pane_component_1 = require("./split-pane.component");
function delayedInit() {
    return {
        ngModule: SplitPaneModule,
        providers: []
    };
}
exports.delayedInit = delayedInit;
var SplitPaneModule = (function () {
    function SplitPaneModule() {
    }
    return SplitPaneModule;
}());
SplitPaneModule.forRoot = delayedInit();
SplitPaneModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                declarations: [
                    horizontal_split_pane_component_1.HorizontalSplitPaneComponent,
                    vertical_split_pane_component_1.VerticalSplitPaneComponent,
                    horizontal_split_pane_separator_component_1.HorizontalSplitSeparatorComponent,
                    vertical_split_pane_separator_component_1.VerticalSplitSeparatorComponent,
                    split_pane_separator_component_1.SplitSeparatorComponent,
                    split_pane_component_1.SplitPaneComponent
                ],
                exports: [horizontal_split_pane_component_1.HorizontalSplitPaneComponent, vertical_split_pane_component_1.VerticalSplitPaneComponent]
            },] },
];
SplitPaneModule.ctorParameters = function () { return []; };
exports.SplitPaneModule = SplitPaneModule;
//# sourceMappingURL=ng2-split-pane.js.map