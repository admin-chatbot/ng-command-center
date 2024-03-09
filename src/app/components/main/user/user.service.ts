import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ApiResponce } from 'src/app/entity/apiResponce';
import { Application } from 'src/app/entity/application';
import { User } from 'src/app/entity/user';
import { UserSearch } from 'src/app/entity/userSearch';
import { HandleError, HttpErrorHandlerService } from 'src/app/http/http-error-handler.service';
import { UrlService } from 'src/app/service/url.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private handleError: HandleError;
  private token: any;

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService,
    private url: UrlService
  ) {
    this.token = localStorage.getItem('token');
   
    this.handleError = httpErrorHandler.createHandleError('UserService ');
  }

  register(user:User):Observable<User|any>{
    const url = this.url.user();    
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
    return this.http.post<any>(url,user,httpOptions)
    .pipe(
      catchError(this.handleError('Register User'))
    )
  }

  onBoard(user:User) : Observable<string | any> {
    const url = this.url.user();       
    user.id = 0;     
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
    return this.http.post<any>(url,user,httpOptions)
    .pipe(
      catchError(this.handleError('Register User'))
    )
  }




  edit(user:User):Observable<User|any>{
    const url = this.url.user();    
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
    return this.http.put<any>(url,user,httpOptions)
    .pipe(
      catchError(this.handleError('Edit User.'))
    )
  }




  fetchUser():Observable<User[]|any> {   
    const url = this.url.user();   
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
    return this.http.get<User[]>(url, httpOptions)
    .pipe(
      catchError(this.handleError('list users.'))
    );
  }

  byClientId(id:number):Observable<User[]|any> {
    const url = this.url.user()+id+"/"; 
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
    return this.http.get<User[]>(url, httpOptions)
    .pipe(
      catchError(this.handleError('list users.'))
    );
  }

  
  fetchUserByClientAndStatus(id:number,status:string) : Observable<User[] | any>{
    const url = this.url.user()+"byClient/"+id+"/status/"+status;   
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
    return this.http.get<User[]>(url, httpOptions)
    .pipe(
      catchError(this.handleError('userList'))
    );
}



search(userSearchRequest:UserSearch) :Observable<ApiResponce | any> {
  const url = this.url.user()+"search/";   
  const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER':this.token, 'Content-Type': 'application/json','accept':'application/json' }) };
  return this.http.post<ApiResponce>(url,userSearchRequest,httpOptions)
  .pipe(
    catchError(this.handleError('Search'))
  );
}
fetchApplicationNames1(clientId: string): Observable<string[] | any> {
  const url = this.url.application() + clientId + '/'; // Adjust the API endpoint accordingly

  const httpOptions = {
    headers: new HttpHeaders({
      'X-AUTH-LOG-HEADER': this.token,
      'Content-Type': 'application/json',
      'accept': 'application/json'
    })
  };

  // Return the observable from the HTTP request
  return this.http.get<string[]>(url, httpOptions)
    .pipe(
      catchError(this.handleError('Fetch Application Names'))
    );
}
}