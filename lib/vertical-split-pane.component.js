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
var VerticalSplitPaneComponent = (function (_super) {
    __extends(VerticalSplitPaneComponent, _super);
    function VerticalSplitPaneComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VerticalSplitPaneComponent.prototype.getTotalSize = function () {
        return this.outerContainer.nativeElement.offsetWidth;
    };
    VerticalSplitPaneComponent.prototype.getPrimarySize = function () {
        return this.primaryComponent.nativeElement.offsetWidth;
    };
    VerticalSplitPaneComponent.prototype.getSecondarySize = function () {
        return this.secondaryComponent.nativeElement.offsetWidth;
    };
    VerticalSplitPaneComponent.prototype.dividerPosition = function (size) {
        var sizePct = (size / this.getTotalSize()) * 100;
        this.primaryComponent.nativeElement.style.width = sizePct + "%";
        this.secondaryComponent.nativeElement.style.width =
            "calc(" + (100 - sizePct) + "% - " +
                (this.primaryToggledOff || this.secondaryToggledOff ? 0 : this.separatorThickness) + "px)";
    };
    VerticalSplitPaneComponent.prototype.onMousemove = function (event) {
        if (this.isResizing) {
            var coords = position_service_1.PositionService.offset(this.primaryComponent);
            this.applySizeChange(event.pageX - coords.left);
            return false;
        }
    };
    VerticalSplitPaneComponent.prototype.onTouchmove = function (event) {
        if (this.isResizing) {
            var coords = position_service_1.PositionService.offset(this.primaryComponent);
            this.applySizeChange(event.changedTouches[0].pageX - coords.left);
            return false;
        }
    };
    return VerticalSplitPaneComponent;
}(split_pane_component_1.SplitPaneComponent));
VerticalSplitPaneComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'vertical-split-pane',
                styles: ["\n    .v-outer {\n      height: 100%;\n      width: 100%;\n      display: flex;\n    }\n\n    .left-component {\n      width: calc(50% - 4px);\n    }\n\n    .right-component {\n      width: calc(50% - 4px);\n    }\n  "],
                template: "\n  <div #outer class=\"v-outer\">\n    <div\n      #primaryComponent\n      [hidden]=\"primaryToggledOff\"\n      class=\"left-component\">\n      <ng-content select=\".split-pane-content-primary\"></ng-content>\n    </div>\n    <vertical-split-separator\n      #separator\n      [hidden]=\"primaryToggledOff ||\u00A0secondaryToggledOff\"\n      [thickness]=\"separatorThickness\"\n      (notifyWillChangeSize)=\"notifyWillChangeSize($event)\">\n    </vertical-split-separator>\n    <div\n      #secondaryComponent\n      [hidden]=\"secondaryToggledOff\"\n      class=\"right-component\">\n      <ng-content select=\".split-pane-content-secondary\"></ng-content>\n    </div>\n  </div>\n  ",
            },] },
];
VerticalSplitPaneComponent.ctorParameters = function () { return []; };
VerticalSplitPaneComponent.propDecorators = {
    'outerContainer': [{ type: core_1.ViewChild, args: ['outer',] },],
    'onMousemove': [{ type: core_1.HostListener, args: ['mousemove', ['$event'],] },],
    'onTouchmove': [{ type: core_1.HostListener, args: ['touchmove', ['$event'],] },],
};
exports.VerticalSplitPaneComponent = VerticalSplitPaneComponent;
//# sourceMappingURL=vertical-split-pane.component.js.map