import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { content } from './shared/routes/routes';
import { fullRoutes } from './shared/routes/full-routes';
import { FullComponent } from './shared/components/layout/full/full.component';
import { AdminGuard } from './shared/guard/admin.guard';
const routes = [
    {
        path: '',
        redirectTo: 'main/dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: ContentComponent,
        children: content,
        canActivate: [AdminGuard],
    },
    {
        path: '',
        component: FullComponent,
        children: fullRoutes,
    },
    {
        path: '**',
        redirectTo: 'error-page/error-400',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map