import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let SignInComponent = class SignInComponent {
    constructor(router, authService, formBuilder) {
        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.show = true;
        this.validate = false;
        this.submitted = false;
        this.signupForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required]],
            password: ['', Validators.required],
            mobile: ['', [Validators.required]]
        });
    }
    ngOnInit() {
        //throw new Error('Method not implemented.');
    }
    get f() { return this.signupForm.controls; }
    submit() {
        this.validate = true;
        if (!this.signupForm.valid) {
            return;
        }
        this.submitted = true;
        const authentication = {};
        authentication.name = this.f['name'].value;
        authentication.userName = this.f['email'].value;
        authentication.password = this.f['password'].value;
        authentication.mobileNumber = this.f['mobile'].value;
        authentication.createdUserId = 'WEB';
        authentication.userType = 'CLIENT_ADMIN';
        this.authService.signup(authentication)
            .subscribe(r => {
            if (r.errorCode != undefined && r.errorCode != 200) {
                alert('Not able to onboard. please try again in sometime');
            }
            else {
                this.router.navigate(['auth/signup-success']);
            }
            this.submitted = false;
        });
    }
};
SignInComponent = __decorate([
    Component({
        selector: 'app-sign-in',
        templateUrl: './sign-in.component.html',
        styleUrl: './sign-in.component.scss'
    })
], SignInComponent);
export { SignInComponent };
//# sourceMappingURL=sign-in.component.js.map