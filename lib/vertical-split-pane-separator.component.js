"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var split_pane_separator_component_1 = require("./split-pane-separator.component");
var VerticalSplitSeparatorComponent = (function (_super) {
    __extends(VerticalSplitSeparatorComponent, _super);
    function VerticalSplitSeparatorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VerticalSplitSeparatorComponent.prototype.ngAfterViewInit = function () {
        this.invisibleExtension.nativeElement.style.left =
            -(7 - this.thickness) / 2 + "px";
    };
    return VerticalSplitSeparatorComponent;
}(split_pane_separator_component_1.SplitSeparatorComponent));
VerticalSplitSeparatorComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'vertical-split-separator',
                styles: ["\n    :host {\n      background-color: #fff;\n      border-left: 1px solid #ddd;\n      cursor: ew-resize;\n      position: relative;\n    }\n    :host:hover {\n      background-color: #fafafa;\n    }\n\n    .invisible-extension {\n      position: absolute;\n      height: 100%;\n      width: 100%;\n      min-width: 7px;\n    }\n\n    .handle {\n      width: 100%;\n      height: 35px;\n      background-color: #eee;\n      position: absolute;\n      top: calc(50% - 17px);\n    }\n  "],
                template: "\n    <!-- Used to extend the 'draggable' area in case the separator is too thin,\n    so it's not too hard to drag. -->\n    <div\n      #invisibleExtension\n      [hidden]=\"thickness >= 7\"\n      class=\"invisible-extension\"></div>\n\n    <div class=\"handle\"></div>\n  ",
                host: {
                    '[style.width.px]': 'thickness'
                }
            },] },
];
VerticalSplitSeparatorComponent.ctorParameters = function () { return []; };
exports.VerticalSplitSeparatorComponent = VerticalSplitSeparatorComponent;
//# sourceMappingURL=vertical-split-pane-separator.component.js.map