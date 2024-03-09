import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
const routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: {
                    title: "Dashboard",
                    breadcrumb: "dashboard",
                }
            },
            {
                path: 'project',
                data: {
                    title: "Project",
                    breadcrumb: "Project",
                },
                loadChildren: () => import('../../components/main/project/project.module').then(m => m.ProjectModule),
            },
            {
                path: 'chat',
                data: {
                    title: "Chat",
                    breadcrumb: "Chat",
                },
                loadChildren: () => import('../../components/main/chat/chat.module').then(m => m.ChatModule),
            },
            {
                path: 'user',
                data: {
                    title: "User",
                    breadcrumb: "user",
                },
                loadChildren: () => import('../../components/main/user/user.module').then(m => m.UserModule),
            },
            {
                path: 'faq',
                data: {
                    title: "FAQ",
                    breadcrumb: "",
                },
                loadChildren: () => import('../../components/main/faq/faq.module').then(m => m.FaqModule),
            },
        ]
    }
];
let MainRoutingModule = class MainRoutingModule {
};
MainRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], MainRoutingModule);
export { MainRoutingModule };
//# sourceMappingURL=main-routing.module.js.map