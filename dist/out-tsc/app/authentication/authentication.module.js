import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = __decorate([
    NgModule({
        declarations: [
            LoginComponent,
            SignInComponent,
            ForgotPasswordComponent,
            ResetPasswordComponent
        ],
        imports: [
            CommonModule,
            AuthenticationRoutingModule,
            SharedModule,
        ]
    })
], AuthenticationModule);
export { AuthenticationModule };
//# sourceMappingURL=authentication.module.js.map