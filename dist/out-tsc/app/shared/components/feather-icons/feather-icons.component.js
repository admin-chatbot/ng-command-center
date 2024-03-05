import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as feather from 'feather-icons';
let FeatherIconsComponent = class FeatherIconsComponent {
    constructor() {
        this.width = 20;
    }
    ngAfterViewInit() {
        feather.replace();
    }
};
__decorate([
    Input()
], FeatherIconsComponent.prototype, "icons", void 0);
__decorate([
    Input()
], FeatherIconsComponent.prototype, "class", void 0);
__decorate([
    Input()
], FeatherIconsComponent.prototype, "customStyle", void 0);
__decorate([
    Input()
], FeatherIconsComponent.prototype, "width", void 0);
FeatherIconsComponent = __decorate([
    Component({
        selector: 'app-feather-icons',
        templateUrl: './feather-icons.component.html',
        styleUrls: ['./feather-icons.component.scss']
    })
], FeatherIconsComponent);
export { FeatherIconsComponent };
//# sourceMappingURL=feather-icons.component.js.map