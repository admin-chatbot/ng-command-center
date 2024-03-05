import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
let ApplicationService = class ApplicationService {
    constructor(http, httpErrorHandler, url) {
        this.http = http;
        this.httpErrorHandler = httpErrorHandler;
        this.url = url;
        this.token = localStorage.getItem('token');
        this.handleError = httpErrorHandler.createHandleError('ApplicationService');
    }
    fetchApplication() {
        const url = this.url.application();
        const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER': this.token, 'Content-Type': 'application/json', 'accept': 'application/json' }) };
        return this.http.get(url, httpOptions)
            .pipe(catchError(this.handleError('applicationList')));
    }
};
ApplicationService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ApplicationService);
export { ApplicationService };
//# sourceMappingURL=application.service.js.map