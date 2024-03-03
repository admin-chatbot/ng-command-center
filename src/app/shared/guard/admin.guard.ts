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
    // Guard for user is login or not
    let isLoggedIn = localStorage.getItem('isLoggedIn') ;
    if (!isLoggedIn || isLoggedIn === null) {
      this.router.navigate(['/auth/login']);
      return true;
    }
    return true;
  }

  
}
