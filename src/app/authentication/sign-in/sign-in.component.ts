import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Authentication } from 'src/app/entity/authentication';

@Component({
  selector: 'app-sign-in', 
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {

  public show: boolean = true;
  public validate = false;
  public submitted = false;
  public signupForm: FormGroup;


  constructor(private router: Router,private authService: AuthenticationService,private formBuilder: FormBuilder){
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]], 
      password:['',Validators.required],
      mobile:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  get f() { return this.signupForm.controls; }

  submit() {
    this.validate = true; 
    if(!this.signupForm.valid){
        return
    }   

    this.submitted = true;
    const authentication : Authentication = {} as Authentication;

    authentication.name = this.f['name'].value;
    authentication.userName = this.f['email'].value;
    authentication.password = this.f['password'].value;   
    authentication.mobileNumber = this.f['mobile'].value;
    authentication.createdUserId = 'WEB';
    authentication.userType = 'CLIENT_ADMIN';

    this.authService.signup(authentication)
    .subscribe(r=>{ 
      if (r.errorCode != undefined && r.errorCode != 200) { 
        alert('Not able to onboard. please try again in sometime')           
      } else {         
        this.router.navigate(['auth/signup-success'])
      }
      this.submitted = false;
    });
  }

}
