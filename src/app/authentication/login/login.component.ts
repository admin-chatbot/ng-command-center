import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Login } from 'src/app/entity/login';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
 
  public show: boolean = true;
  public validate = false;
  public loginForm: FormGroup;
  public submitted = false;

  constructor(private router: Router,private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private toast:ToastrService){
    this.loginForm = this.formBuilder.group({
      email: ['ajit.singh@gmail.com', [Validators.required,Validators.email]],
      password: ['ajit@123', [Validators.required]]
    });
  }

  ngOnInit(): void {
    
  }
 
  get f() { return this.loginForm.controls; }

  submit() {
    
    this.validate = !this.validate;
    if(!this.loginForm.valid){
        return
    }
    this.submitted = true;
    
    const login : Login = {} as Login;
    login.email = this.f['email'].value;
    login.password = this.f['password'].value;

    this.authService.login(login)
      .subscribe(r=>{
        if (r.errorCode != undefined && r.errorCode != 200) {  
          this.toast.error("Invalid Username and Password.","Login failed")            
        } else {          
          localStorage.setItem('isLoggedIn', "true")
          localStorage.setItem('token', r.data.token)  
          localStorage.setItem('name',r.data.name)
          localStorage.setItem('email',r.data.userName)
          localStorage.setItem('id',r.data.id)
          localStorage.setItem('type',r.data.userType)
          localStorage.setItem('time', (new Date().getTime()/1000 ).toString())
          this.router.navigate(['main/dashboard']);
        }
        this.submitted = false;
      })
    
  }

}
