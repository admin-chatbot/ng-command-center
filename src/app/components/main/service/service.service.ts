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
  private httpOptions: any;
  
  constructor(private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService, 
    private url : UrlService) {
      this.handleError = httpErrorHandler.createHandleError('ServiceService');
      this.token = localStorage.getItem('token');
      this.id = localStorage.getItem('id');
      this.httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
  }

  fetchService() : Observable<ApiResponce[] | any>{ 
    const url = this.url.service();       
    return this.http.get<ApiResponce[]>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError('serviceList'))
    );
  }

  fetchApplication() : Observable<ApiResponce | any>{
    const url = this.url.application();   
   return this.http.get<ApiResponce>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError('applicationList'))
    );
  }

  onBoard(service:Service) : Observable<string | any> {
    const url = this.url.service();  
    return this.http.post<any>(url,service,this.httpOptions)
    .pipe(
      catchError(this.handleError('OnBoard Service'))
    )
  }





}
