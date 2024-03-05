import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { UsersEditsComponent } from './users-edits/users-edits.component';
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: UserCardsComponent,
                data: {
                    title: 'User List',
                    breadcrumb: 'List',
                }
            },
            {
                path: 'create',
                component: UsersEditsComponent,
                data: {
                    title: 'Create User',
                    breadcrumb: 'Create',
                }
            },
        ],
    }
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], UserRoutingModule);
export { UserRoutingModule };
//# sourceMappingURL=user-routing.module.js.map