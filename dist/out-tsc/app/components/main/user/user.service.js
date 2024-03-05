import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
let UserService = class UserService {
    fetchApplicationNames(clientId) {
        throw new Error('Method not implemented.');
    }
    constructor(http, httpErrorHandler, url) {
        this.http = http;
        this.httpErrorHandler = httpErrorHandler;
        this.url = url;
        this.token = localStorage.getItem('token');
        this.handleError = httpErrorHandler.createHandleError('UserService ');
    }
    register(user) {
        const url = this.url.user();
        const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER': this.token, 'Content-Type': 'application/json', 'accept': 'application/json' }) };
        return this.http.post(url, user, httpOptions)
            .pipe(catchError(this.handleError('Register User')));
    }
    edit(user) {
        const url = this.url.user();
        const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER': this.token, 'Content-Type': 'application/json', 'accept': 'application/json' }) };
        return this.http.put(url, user, httpOptions)
            .pipe(catchError(this.handleError('Edit User.')));
    }
    fetchUser() {
        const url = this.url.user();
        const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER': this.token, 'Content-Type': 'application/json', 'accept': 'application/json' }) };
        return this.http.get(url, httpOptions)
            .pipe(catchError(this.handleError('list users.')));
    }
    byClientId(id) {
        const url = this.url.user() + id + "/";
        const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER': this.token, 'Content-Type': 'application/json', 'accept': 'application/json' }) };
        return this.http.get(url, httpOptions)
            .pipe(catchError(this.handleError('list users.')));
    }
    fetchUserByClientAndStatus(id, status) {
        const url = this.url.user() + "byClient/" + id + "/status/" + status;
        const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER': this.token, 'Content-Type': 'application/json', 'accept': 'application/json' }) };
        return this.http.get(url, httpOptions)
            .pipe(catchError(this.handleError('userList')));
    }
    search(userSearchRequest) {
        const url = this.url.user() + "search/";
        const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER': this.token, 'Content-Type': 'application/json', 'accept': 'application/json' }) };
        return this.http.post(url, userSearchRequest, httpOptions)
            .pipe(catchError(this.handleError('Search')));
    }
    fetchApplicationNames1(clientId) {
        const url = this.url.application() + clientId + '/'; // Adjust the API endpoint accordingly
        const httpOptions = {
            headers: new HttpHeaders({
                'X-AUTH-LOG-HEADER': this.token,
                'Content-Type': 'application/json',
                'accept': 'application/json'
            })
        };
        // Return the observable from the HTTP request
        return this.http.get(url, httpOptions)
            .pipe(catchError(this.handleError('Fetch Application Names')));
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map