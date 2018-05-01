"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SplitSeparatorComponent = (function () {
    function SplitSeparatorComponent() {
        this.notifyWillChangeSize = new core_1.EventEmitter();
    }
    SplitSeparatorComponent.prototype.ngOnInit = function () {
    };
    SplitSeparatorComponent.prototype.onMousedown = function (event) {
        this.notifyWillChangeSize.emit(true);
        return false;
    };
    SplitSeparatorComponent.prototype.ontouchstart = function (event) {
        this.notifyWillChangeSize.emit(true);
        return false;
    };
    return SplitSeparatorComponent;
}());
SplitSeparatorComponent.decorators = [
    { type: core_1.Component, args: [{
                template: ''
            },] },
];
SplitSeparatorComponent.ctorParameters = function () { return []; };
SplitSeparatorComponent.propDecorators = {
    'thickness': [{ type: core_1.Input },],
    'notifyWillChangeSize': [{ type: core_1.Output },],
    'invisibleExtension': [{ type: core_1.ViewChild, args: ['invisibleExtension',] },],
    'onMousedown': [{ type: core_1.HostListener, args: ['mousedown', ['$event'],] },],
    'ontouchstart': [{ type: core_1.HostListener, args: ['touchstart', ['$event'],] },],
};
exports.SplitSeparatorComponent = SplitSeparatorComponent;
//# sourceMappingURL=split-pane-separator.component.js.map