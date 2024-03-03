import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard  {
  // 
  public url : any;
  constructor(public router: Router) { }
  ngOnInit(){
    this.url = this.router.url;
  }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      var loggedOut : boolean = false;

      let isLoggedIn = localStorage.getItem('isLoggedIn') ;
      if ( !loggedOut && ( !isLoggedIn || isLoggedIn === null)) {
        loggedOut = true;        
      }

      
      if( !loggedOut &&  localStorage.getItem('time')===null){
        loggedOut = true;  
      }
      var currentTime = (new Date().getTime()) / 1000;
      let logInTime = Number.parseInt(localStorage.getItem('time')!) ;

      if ( !loggedOut && (currentTime - logInTime >= 1500)) {
        loggedOut = true;  
      }

    // Guard for user is login or not
    if(loggedOut){
      localStorage.clear()
      this.router.navigate(['/authentication/login']);
      return true;
    }
    return true;
  }


  
}
