import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AdminGuard = class AdminGuard {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.url = this.router.url;
    }
    canActivate(route, state) {
        var loggedOut = false;
        let isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!loggedOut && (!isLoggedIn || isLoggedIn === null)) {
            loggedOut = true;
        }
        if (!loggedOut && localStorage.getItem('time') === null) {
            loggedOut = true;
        }
        var currentTime = (new Date().getTime()) / 1000;
        let logInTime = Number.parseInt(localStorage.getItem('time'));
        if (!loggedOut && (currentTime - logInTime >= 1500)) {
            loggedOut = true;
        }
        // Guard for user is login or not
        if (loggedOut) {
            localStorage.clear();
            this.router.navigate(['/authentication/login']);
            return true;
        }
        return true;
    }
};
AdminGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AdminGuard);
export { AdminGuard };
//# sourceMappingURL=admin.guard.js.map