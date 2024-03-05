import { __decorate } from "tslib";
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
let ClickOutsideDirective = class ClickOutsideDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.clickOutside = new EventEmitter();
    }
    onClick(event, targetElement) {
        if (!targetElement) {
            return;
        }
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
};
__decorate([
    Output()
], ClickOutsideDirective.prototype, "clickOutside", void 0);
__decorate([
    HostListener('document:click', ['$event', '$event.target'])
], ClickOutsideDirective.prototype, "onClick", null);
ClickOutsideDirective = __decorate([
    Directive({
        selector: '[clickOutside]'
    })
], ClickOutsideDirective);
export { ClickOutsideDirective };
//# sourceMappingURL=click-outside.directive.js.map