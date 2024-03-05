import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Response } from '../entity/responce';
let HttpErrorHandlerService = class HttpErrorHandlerService {
    constructor(messageService, router, route) {
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        /** Create curried handleError function that already knows the service name */
        this.createHandleError = (serviceName = '') => (operation = 'operation', result = {}) => this.handleError(serviceName, operation, result);
    }
    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     *
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(serviceName = '', operation = 'operation', result = {}) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead    
            if (error.status == 401) {
                this.router.navigate(['auth/signin']);
            }
            const message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                `server returned code ${error.status} with body "${error.error}"`;
            // TODO: better job of transforming error for user consumption
            this.messageService.add(`${serviceName}: ${operation} failed: ${message}`);
            this.messageService.addShort(error.error);
            let responce = new Response();
            responce.errorCode = error.status;
            //responce.errorMessage = error.message; 
            result.errorCode = error.status;
            result.errorMessage = error.error.message;
            // Let the app keep running by returning a safe result.
            return of(result);
        };
    }
};
HttpErrorHandlerService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HttpErrorHandlerService);
export { HttpErrorHandlerService };
//# sourceMappingURL=http-error-handler.service.js.map