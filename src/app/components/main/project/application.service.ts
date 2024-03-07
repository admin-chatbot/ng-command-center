import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Application } from 'src/app/entity/application';
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

  fetchApplication() : Observable<Application[] | any>{
    const url = this.url.application();   
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
    
    return this.http.get<Application[]>(url, httpOptions)
    .pipe(
      catchError(this.handleError('applicationList'))
    );
  }

  fetchApplicationById(id:number) : Observable< any>{
    const url = this.url.application() +"byId/"+id+"/";    
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };    
    return this.http.get<any>(url, httpOptions)
    .pipe(
      catchError(this.handleError('fetchApplicationById'))
    );
  }

  edit(application:Application) : Observable<string | any> {
    const url = this.url.application();       
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
    return this.http.put<any>(url,application,httpOptions)
    .pipe(
      catchError(this.handleError('OnBoard Application'))
    )
  }

  onBoard(application:Application) : Observable<string | any> {
    const url = this.url.application();       
    application.id = 0;     
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
    return this.http.post<any>(url,application,httpOptions)
    .pipe(
      catchError(this.handleError('OnBoard Application'))
    )
  }

}
