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
var split_pane_component_1 = require("./split-pane.component");
var position_service_1 = require("./position.service");
var HorizontalSplitPaneComponent = (function (_super) {
    __extends(HorizontalSplitPaneComponent, _super);
    function HorizontalSplitPaneComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HorizontalSplitPaneComponent.prototype.getTotalSize = function () {
        return this.outerContainer.nativeElement.offsetHeight;
    };
    HorizontalSplitPaneComponent.prototype.getPrimarySize = function () {
        return this.primaryComponent.nativeElement.offsetHeight;
    };
    HorizontalSplitPaneComponent.prototype.getSecondarySize = function () {
        return this.secondaryComponent.nativeElement.offsetHeight;
    };
    HorizontalSplitPaneComponent.prototype.dividerPosition = function (size) {
        var sizePct = (size / this.getTotalSize()) * 100.0;
        this.primaryComponent.nativeElement.style.height = sizePct + "%";
        this.secondaryComponent.nativeElement.style.height =
            "calc(" + (100 - sizePct) + "% - " +
                (this.primaryToggledOff || this.secondaryToggledOff ? 0 : this.separatorThickness) + "px)";
    };
    HorizontalSplitPaneComponent.prototype.onMousemove = function (event) {
        if (this.isResizing) {
            var coords = position_service_1.PositionService.offset(this.primaryComponent);
            this.applySizeChange(event.pageY - coords.top);
            return false;
        }
    };
    HorizontalSplitPaneComponent.prototype.onTouchmove = function (event) {
        if (this.isResizing) {
            var coords = position_service_1.PositionService.offset(this.primaryComponent);
            this.applySizeChange(event.changedTouches[0].pageY - coords.top);
            return false;
        }
    };
    return HorizontalSplitPaneComponent;
}(split_pane_component_1.SplitPaneComponent));
HorizontalSplitPaneComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'horizontal-split-pane',
                styles: ["\n    .h-outer {\n      height: 100%;\n      width: 100%;\n      display: flex;\n      flex-flow: column;\n    }\n\n    .upper-component {\n      height: calc(50% - 4px);\n    }\n\n    .lower-component {\n      height: calc(50% - 4px);\n    }\n  "],
                template: "\n  <div #outer class=\"h-outer\">\n    <div\n      #primaryComponent\n      [hidden]=\"primaryToggledOff\"\n      class=\"upper-component\">\n      <ng-content select=\".split-pane-content-primary\"></ng-content>\n    </div>\n    <horizontal-split-separator\n      #separator\n      [hidden]=\"primaryToggledOff ||\u00A0secondaryToggledOff\"\n      [thickness]=\"separatorThickness\"\n      (notifyWillChangeSize)=\"notifyWillChangeSize($event)\">\n    </horizontal-split-separator>\n    <div\n      #secondaryComponent\n      [hidden]=\"secondaryToggledOff\"\n      class=\"lower-component\">\n      <ng-content select=\".split-pane-content-secondary\"></ng-content>\n    </div>\n  </div>\n  ",
            },] },
];
HorizontalSplitPaneComponent.ctorParameters = function () { return []; };
HorizontalSplitPaneComponent.propDecorators = {
    'outerContainer': [{ type: core_1.ViewChild, args: ['outer',] },],
    'test': [{ type: core_1.Input },],
    'onMousemove': [{ type: core_1.HostListener, args: ['mousemove', ['$event'],] },],
    'onTouchmove': [{ type: core_1.HostListener, args: ['touchmove', ['$event'],] },],
};
exports.HorizontalSplitPaneComponent = HorizontalSplitPaneComponent;
//# sourceMappingURL=horizontal-split-pane.component.js.map