import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ApiResponce } from 'src/app/entity/apiResponce';
import { ServiceParameter } from 'src/app/entity/serviceParameters';
import { HandleError, HttpErrorHandlerService } from 'src/app/http/http-error-handler.service';
import { UrlService } from 'src/app/service/url.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceParameterService {

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


  onBoard(serviceParameter:ServiceParameter) : Observable<ApiResponce | any> {    
    const url = this.url.serviceParametrer();           
    return this.http.post<any>(url,serviceParameter,this.httpOptions)
    .pipe(
      catchError((error) => {
        console.error('API Error:', error);
        return this.handleError('OnBoard Service Parameter')(error);
      })
    );
  }

}
