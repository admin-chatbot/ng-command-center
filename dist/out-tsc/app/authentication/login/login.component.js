import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(router, authService, formBuilder) {
        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.show = true;
        this.validate = false;
        this.submitted = false;
        this.loginForm = this.formBuilder.group({
            email: ['sujit.b@gmail.com', [Validators.required, Validators.email]],
            password: ['sujit@123', [Validators.required]]
        });
    }
    ngOnInit() {
    }
    get f() { return this.loginForm.controls; }
    submit() {
        this.validate = !this.validate;
        if (!this.loginForm.valid) {
            return;
        }
        this.submitted = true;
        const login = {};
        login.email = this.f['email'].value;
        login.password = this.f['password'].value;
        this.authService.login(login)
            .subscribe(r => {
            if (r.errorCode != undefined && r.errorCode != 200) {
                alert("Invalid Username and Password.");
            }
            else {
                localStorage.setItem('isLoggedIn', "true");
                localStorage.setItem('token', r.data.token);
                localStorage.setItem('name', r.data.name);
                localStorage.setItem('email', r.data.userName);
                localStorage.setItem('id', r.data.id);
                localStorage.setItem('type', r.data.userType);
                localStorage.setItem('time', (new Date().getTime() / 1000).toString());
                this.router.navigate(['main/dashboard']);
            }
            this.submitted = false;
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrl: './login.component.scss'
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map