import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'login',
        component : LoginComponent,
      },
      {
        path : 'register',
        component : SignInComponent,
      },
      {
        path : 'forget',
        component : ForgotPasswordComponent,
      },
      {
        path : 'reset',
        component : ForgotPasswordComponent,
      },
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
