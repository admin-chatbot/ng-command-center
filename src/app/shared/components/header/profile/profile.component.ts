import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})

export class ProfileComponent {

  public isShow: boolean = false;
  public userType: any = "USER";
  public userName: any = "Guest";

  constructor(public router: Router) {
    this.userType = localStorage.getItem('type') ;
    this.userName = localStorage.getItem('name') ;
  }

  logOut() {
    localStorage.clear();
    localStorage.setItem('isLoggedIn','false')
    this.router.navigateByUrl("/authentication/login");
  }
  
}
