import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
let AuthenticationService = class AuthenticationService {
    constructor(http, httpErrorHandler, url) {
        this.http = http;
        this.httpErrorHandler = httpErrorHandler;
        this.url = url;
        this.handleError = httpErrorHandler.createHandleError('AuthenticationService');
    }
    login(login) {
        const url = this.url.login();
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'accept': 'application/json' }) };
        return this.http.post(url, login, httpOptions)
            .pipe(catchError(this.handleError('Login')));
    }
    signup(auth) {
        const url = this.url.signup();
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'accept': 'application/json' }) };
        return this.http.post(url, auth, httpOptions)
            .pipe(catchError(this.handleError('Signup')));
    }
};
AuthenticationService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map