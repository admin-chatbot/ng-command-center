import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let UrlService = class UrlService {
    constructor() { }
    application() {
        return environment.baseEndpoint + "application/";
    }
    client() {
        return environment.baseEndpoint + "client/";
    }
    login() {
        return environment.baseEndpoint + "auth/login/";
    }
    signup() {
        return environment.baseEndpoint + "auth/register/";
    }
    service() {
        return environment.baseEndpoint + "service/";
    }
    serviceParametrer() {
        return environment.baseEndpoint + "service/parameter/";
    }
    dashboard() {
        return environment.baseEndpoint + "dashboard/";
    }
    serviceDiscover() {
        return environment.baseEndpoint + "service/discover/";
    }
    serviceLoad() {
        return environment.baseEndpoint + "service/load/";
    }
    user() {
        return environment.baseEndpoint + "user/";
    }
    serviceLog() {
        return environment.baseEndpoint + "service/log/";
    }
    botLog() {
        return environment.baseEndpoint + "botrequestlog/";
    }
};
UrlService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UrlService);
export { UrlService };
//# sourceMappingURL=url.service.js.map