import { __decorate } from "tslib";
import { Component, Input } from "@angular/core";
let UserProfileComponent = class UserProfileComponent {
    constructor() {
        this.isShow = false;
    }
    clickOutside() {
        this.isShow = false;
    }
};
__decorate([
    Input()
], UserProfileComponent.prototype, "item", void 0);
UserProfileComponent = __decorate([
    Component({
        selector: "app-user-profile",
        templateUrl: "./user-profile.component.html",
        styleUrls: ["./user-profile.component.scss"],
    })
], UserProfileComponent);
export { UserProfileComponent };
//# sourceMappingURL=user-profile.component.js.map