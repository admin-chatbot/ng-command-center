import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ApiResponce } from 'src/app/entity/apiResponce';
import { HandleError, HttpErrorHandlerService } from 'src/app/http/http-error-handler.service';
import { UrlService } from 'src/app/service/url.service';
import { ServiceIntend } from './serviceIntend';

@Injectable({
  providedIn: 'root'
})
export class ServiceIntendService {

  private handleError: HandleError;
  private token:any;
  private id:any;
  private httpOptions: any;
  
  constructor(private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService, 
    private url : UrlService) {
      this.handleError = httpErrorHandler.createHandleError('ServiceService');
      this.token = localStorage.getItem('token');
      this.id = localStorage.getItem('id');
      this.httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
  }

  fetchServiceIntend() : Observable<ApiResponce[] | any>{ 
    const url = this.url.service();       
    return this.http.get<ApiResponce[]>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError('serviceList'))
    );
  }

  addIntend(intend:ServiceIntend) : Observable<string | any> {
    const url = this.url.serviceIntend();  
    return this.http.post<any>(url,intend,this.httpOptions)
    .pipe(
      catchError(this.handleError('OnBoard Service'))
    )
  }

}
