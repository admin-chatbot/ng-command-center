import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ApiResponce } from 'src/app/entity/apiResponce';
import { Application } from 'src/app/entity/application';
import { ApplicationSearch } from 'src/app/entity/applicationSearch';
import { HandleError, HttpErrorHandlerService } from 'src/app/http/http-error-handler.service';
import { UrlService } from 'src/app/service/url.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private handleError: HandleError;
  private token:any;

  constructor(private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService, 
    private url : UrlService) {
      this.token = localStorage.getItem('token'); 
      this.handleError = httpErrorHandler.createHandleError('ApplicationService');
  }

  fetchApplication() : Observable<ApiResponce | any>{
    const url = this.url.application();   
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
    
    return this.http.get<ApiResponce>(url, httpOptions)
    .pipe(
      catchError(this.handleError('applicationList'))
    );
  }

  fetchApplicationById(id:number) : Observable< ApiResponce | any>{
    const url = this.url.application() +"byId/"+id+"/";    
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };    
    return this.http.get<ApiResponce>(url, httpOptions)
    .pipe(
      catchError(this.handleError('fetchApplicationById'))
    );
  }

  deleteApplication(id:number) : Observable< ApiResponce | any>{
    const url = this.url.application() +"deleteById/"+id;    
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };    
    return this.http.put<ApiResponce>(url, null ,httpOptions)
    .pipe(
      catchError(this.handleError('fetchApplicationById'))
    );
  }

  edit(application:Application) : Observable<ApiResponce | any> {
    const url = this.url.application();       
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
    return this.http.put<ApiResponce>(url,application,httpOptions)
    .pipe(
      catchError(this.handleError('OnBoard Application'))
    )
  }

  onBoard(application:Application) : Observable<ApiResponce | any> {
    const url = this.url.application();       
    application.id = 0;     
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
    return this.http.post<ApiResponce>(url,application,httpOptions)
    .pipe(
      catchError(this.handleError('OnBoard Application'))
    )
  }

  search(applicationSearchRequest:ApplicationSearch) :Observable<ApiResponce | any> {
    const url = this.url.application()+"search/";   
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
    console.log(url);
    console.log(JSON.stringify(applicationSearchRequest));
    return this.http.post<ApiResponce>(url,applicationSearchRequest,httpOptions)
    .pipe(
      catchError(this.handleError('Search'))
    );
  }


}
