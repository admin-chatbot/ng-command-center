import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ApiResponce } from 'src/app/entity/apiResponce';
import { Service } from 'src/app/entity/service';
import { HandleError, HttpErrorHandlerService } from 'src/app/http/http-error-handler.service';
import { UrlService } from 'src/app/service/url.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private handleError: HandleError;
  private token:any;
  private id:any;
  
  constructor(private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService, 
    private url : UrlService) {
      this.handleError = httpErrorHandler.createHandleError('ServiceService');
      this.token = localStorage.getItem('token');
      this.id = localStorage.getItem('id');
  }

  fetchService() : Observable<ApiResponce[] | any>{ 
    const url = this.url.service();       
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
    return this.http.get<ApiResponce[]>(url, httpOptions)
    .pipe(
      catchError(this.handleError('serviceList'))
    );
  }

  fetchApplication() : Observable<ApiResponce | any>{
    const url = this.url.application();   
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
    return this.http.get<ApiResponce>(url, httpOptions)
    .pipe(
      catchError(this.handleError('applicationList'))
    );
  }

  onBoard(service:Service) : Observable<string | any> {
    const url = this.url.service();  
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
    return this.http.post<any>(url,service,httpOptions)
    .pipe(
      catchError(this.handleError('OnBoard Service'))
    )
  }





}
