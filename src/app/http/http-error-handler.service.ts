import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Response } from '../entity/responce';
import { ActivatedRoute, Router } from '@angular/router';

export type HandleError =
  <T> (operation?: string, result?: Response) => (error: HttpErrorResponse) => Observable<Response>;

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {

  constructor(private messageService: MessageService,private router:Router,private route:ActivatedRoute) { }

  /** Create curried handleError function that already knows the service name */
  createHandleError = (serviceName = '') =>
    <T>(operation = 'operation', result = {} as Response) =>
      this.handleError(serviceName, operation, result);


  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   *
   * @param serviceName = name of the data service that attempted the operation
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   handleError<Responce>(serviceName = '', operation = 'operation', result = {} as Response) {

    return (error: HttpErrorResponse): Observable<Response> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead    

      if(error.status == 401) {
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
      result.errorMessage  = error.error.message;
      // Let the app keep running by returning a safe result.
      return of( result );
    };

  }
}
