"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SplitPaneComponent = (function () {
    function SplitPaneComponent() {
        this.initialRatio = 0.5;
        this.primaryMinSize = 0;
        this.secondaryMinSize = 0;
        this.separatorThickness = 7;
        this.primaryToggledOff = false;
        this.secondaryToggledOff = false;
        this.localStorageKey = null;
        this.notifySizeDidChange = new core_1.EventEmitter();
        this.notifyBeginResizing = new core_1.EventEmitter();
        this.notifyEndedResizing = new core_1.EventEmitter();
        this.dividerSize = 8.0;
        this.isResizing = false;
    }
    SplitPaneComponent.prototype.ngAfterViewInit = function () {
        this.checkBothToggledOff();
        if (!this.primaryToggledOff && !this.secondaryToggledOff) {
            var ratio = this.initialRatio;
            if (this.localStorageKey != null) {
                var ratioStr = localStorage.getItem(this.localStorageKey);
                if (ratioStr != null) {
                    ratio = JSON.parse(ratioStr);
                }
            }
            var size = ratio * this.getTotalSize();
            this.applySizeChange(size);
        }
    };
    SplitPaneComponent.prototype.ngOnChanges = function (changes) {
        this.checkBothToggledOff();
        if (changes['primaryToggledOff']) {
            if (changes['primaryToggledOff'].currentValue === true) {
                this.primarySizeBeforeTogglingOff = this.getPrimarySize();
                this.applySizeChange(0);
            }
            else {
                this.applySizeChange(this.primarySizeBeforeTogglingOff);
            }
        }
        else if (changes['secondaryToggledOff']) {
            if (changes['secondaryToggledOff'].currentValue === true) {
                this.primarySizeBeforeTogglingOff = this.getPrimarySize();
                this.applySizeChange(this.getTotalSize());
            }
            else {
                this.applySizeChange(this.primarySizeBeforeTogglingOff);
            }
        }
    };
    SplitPaneComponent.prototype.getTotalSize = function () {
        throw ("SplitPaneComponent shouldn't be instantiated. Override this method.");
    };
    SplitPaneComponent.prototype.getPrimarySize = function () {
        throw ("SplitPaneComponent shouldn't be instantiated. Override this method.");
    };
    SplitPaneComponent.prototype.getSecondarySize = function () {
        throw ("SplitPaneComponent shouldn't be instantiated. Override this method.");
    };
    SplitPaneComponent.prototype.dividerPosition = function (size) {
        throw ("SplitPaneComponent shouldn't be instantiated. Override this method.");
    };
    SplitPaneComponent.prototype.getAvailableSize = function () {
        return this.getTotalSize() - this.dividerSize;
    };
    SplitPaneComponent.prototype.applySizeChange = function (size) {
        var primarySize = this.checkValidBounds(size, this.primaryMinSize, this.getAvailableSize() - this.secondaryMinSize);
        if (this.primaryToggledOff) {
            primarySize = 0;
        }
        else if (this.secondaryToggledOff) {
            primarySize = this.getTotalSize();
        }
        this.dividerPosition(primarySize);
        this.notifySizeDidChange.emit({ 'primary': this.getPrimarySize(), 'secondary': this.getSecondarySize() });
    };
    SplitPaneComponent.prototype.notifyWillChangeSize = function (resizing) {
        this.isResizing = resizing;
        this.notifyBeginResizing.emit();
    };
    SplitPaneComponent.prototype.checkValidBounds = function (newSize, minSize, maxSize) {
        return newSize >= minSize
            ? (newSize <= maxSize)
                ? newSize
                : maxSize
            : minSize;
    };
    SplitPaneComponent.prototype.checkBothToggledOff = function () {
        if (this.primaryToggledOff && this.secondaryToggledOff) {
            throw ('You cannot toggle off both the primary and secondary component');
        }
    };
    SplitPaneComponent.prototype.stopResizing = function () {
        this.isResizing = false;
        this.primaryComponent.nativeElement.style.cursor = "auto";
        this.secondaryComponent.nativeElement.style.cursor = "auto";
        if (this.localStorageKey != null) {
            var ratio = this.getPrimarySize() / (this.getTotalSize());
            localStorage.setItem(this.localStorageKey, JSON.stringify(ratio));
        }
        this.notifyEndedResizing.emit();
    };
    SplitPaneComponent.prototype.onMouseup = function (event) {
        if (this.isResizing) {
            this.stopResizing();
            return false;
        }
    };
    SplitPaneComponent.prototype.ontouchend = function (event) {
        if (this.isResizing) {
            this.stopResizing();
            return false;
        }
    };
    return SplitPaneComponent;
}());
SplitPaneComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'split-pane',
                template: '',
                host: { 'style': 'height: 100%' }
            },] },
];
SplitPaneComponent.ctorParameters = function () { return []; };
SplitPaneComponent.propDecorators = {
    'primaryComponent': [{ type: core_1.ViewChild, args: ['primaryComponent',] },],
    'secondaryComponent': [{ type: core_1.ViewChild, args: ['secondaryComponent',] },],
    'initialRatio': [{ type: core_1.Input, args: ['primary-component-initialratio',] },],
    'primaryMinSize': [{ type: core_1.Input, args: ['primary-component-minsize',] },],
    'secondaryMinSize': [{ type: core_1.Input, args: ['secondary-component-minsize',] },],
    'separatorThickness': [{ type: core_1.Input, args: ['separator-thickness',] },],
    'primaryToggledOff': [{ type: core_1.Input, args: ['primary-component-toggled-off',] },],
    'secondaryToggledOff': [{ type: core_1.Input, args: ['secondary-component-toggled-off',] },],
    'localStorageKey': [{ type: core_1.Input, args: ['local-storage-key',] },],
    'notifySizeDidChange': [{ type: core_1.Output, args: ['on-change',] },],
    'notifyBeginResizing': [{ type: core_1.Output, args: ['on-begin-resizing',] },],
    'notifyEndedResizing': [{ type: core_1.Output, args: ['on-ended-resizing',] },],
    'onMouseup': [{ type: core_1.HostListener, args: ['mouseup', ['$event'],] }, { type: core_1.HostListener, args: ['touchend', ['$event'],] },],
};
exports.SplitPaneComponent = SplitPaneComponent;
//# sourceMappingURL=split-pane.component.js.map