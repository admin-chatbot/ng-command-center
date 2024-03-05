import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/user/user';
let UserCardsComponent = class UserCardsComponent {
    constructor() {
        this.openTab = "ACTIVE";
        this.userLists = data.userCards;
        this.userCards = data.userCards;
    }
    ngAfterViewInit() {
        throw new Error('Method not implemented.');
    }
    ngOnInit() {
        throw new Error('Method not implemented.');
    }
    getUsers() {
        this.userService.fetchUser()
            .subscribe(res => {
            if (res.errorCode != undefined && res.errorCode != 200) {
                this.toast.error('Not able to onboard. please try again in sometime', 'ERROR');
            }
            else {
                this.users = res.data;
                this.userFilterData = this.users.filter((data) => {
                    return data.status == 'ACTIVE' ? true : false;
                });
            }
        });
    }
    tabbed(val) {
        this.openTab = val;
        this.userFilterData = val !== 'All' ? this.users.filter((data) => {
            return data.status == this.openTab ? true : false;
        }) : this.users;
    }
};
UserCardsComponent = __decorate([
    Component({
        selector: 'app-user-cards',
        templateUrl: './user-cards.component.html',
        styleUrls: ['./user-cards.component.scss']
    })
], UserCardsComponent);
export { UserCardsComponent };
//# sourceMappingURL=user-cards.component.js.map