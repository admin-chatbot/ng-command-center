import { __decorate } from "tslib";
import { Component, Input } from "@angular/core";
let SvgIconComponent = class SvgIconComponent {
    constructor(layoutService) {
        this.layoutService = layoutService;
    }
    getSvgType() {
        return document.getElementsByClassName("sidebar-wrapper")[0].getAttribute("icon") == "stroke-svg";
    }
};
__decorate([
    Input("icon")
], SvgIconComponent.prototype, "icon", void 0);
SvgIconComponent = __decorate([
    Component({
        selector: "app-svg-icon",
        templateUrl: "./svg-icon.component.html",
        styleUrls: ["./svg-icon.component.scss"],
    })
], SvgIconComponent);
export { SvgIconComponent };
//# sourceMappingURL=svg-icon.component.js.map