import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ApiResponce } from 'src/app/entity/apiResponce';
import { AutoDiscoverServiceRequest } from 'src/app/entity/autoDiscoverServiceRequest'; 
import { HandleError, HttpErrorHandlerService } from 'src/app/http/http-error-handler.service';
import { UrlService } from 'src/app/service/url.service';

@Injectable({
  providedIn: 'root'
})
export class AutoDiscoverService {

  private handleError: HandleError;
  private token:any;
  private httpOptions: any;

  constructor(private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService, 
    private url : UrlService) {
      this.token = localStorage.getItem('token'); 
      this.handleError = httpErrorHandler.createHandleError('ApplicationService');
      this.httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
  }

  loadService(autoDiscoverServiceRequest:AutoDiscoverServiceRequest) :  Observable<ApiResponce |any>{
    const url = this.url.serviceLoad();    
     return this.http.post<ApiResponce>(url,autoDiscoverServiceRequest, this.httpOptions)
    .pipe(
      catchError(this.handleError('loadService'))
    );
  }


  discoverService(id:number) : Observable<ApiResponce |any> {
    const url = this.url.serviceDiscover()+id+"/";     
     return this.http.post<ApiResponce>(url,"", this.httpOptions)
    .pipe(
      catchError(this.handleError('discoverService'))
    );
  }
}
