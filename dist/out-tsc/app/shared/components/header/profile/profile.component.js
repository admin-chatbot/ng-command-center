import { __decorate } from "tslib";
import { Component } from "@angular/core";
let ProfileComponent = class ProfileComponent {
    constructor(router) {
        this.router = router;
        this.isShow = false;
        this.userType = "USER";
        this.userName = "Guest";
        this.userType = localStorage.getItem('type');
        this.userName = localStorage.getItem('email');
    }
    logOut() {
        localStorage.clear();
        this.router.navigateByUrl("/authentication/login");
    }
};
ProfileComponent = __decorate([
    Component({
        selector: "app-profile",
        templateUrl: "./profile.component.html",
        styleUrls: ["./profile.component.scss"],
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map