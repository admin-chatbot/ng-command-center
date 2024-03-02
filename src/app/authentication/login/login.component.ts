import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
 
  public show: boolean = true;
  constructor(private router: Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 

  login() {
    this.router.navigate(['/main/dashboard']);
  }

}
