import { Injectable } from '@angular/core';
import { HandleError, HttpErrorHandlerService } from '../http/http-error-handler.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../service/url.service';
import { Observable, catchError } from 'rxjs';
import { Login } from '../entity/login';
import { Signup } from '../entity/signup';
import { Authentication } from '../entity/authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private handleError: HandleError;

  constructor(private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService, 
    private url : UrlService) {
      this.handleError = httpErrorHandler.createHandleError('AuthenticationService');
  }


  login(login:Login) : Observable<Authentication | any> {
    const url = this.url.login();  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json','accept':'application/json' }) };
    return this.http.post<any>(url,login,httpOptions)
    .pipe(
      catchError(this.handleError('Login'))
    )
  }

  signup(signup:Signup) : Observable<Authentication | any> {
    const url = this.url.signup(); 
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json','accept':'application/json' }) };
    return this.http.post<any>(url,signup,httpOptions)
    .pipe(
      catchError(this.handleError('Signup'))
    )
  }

}
