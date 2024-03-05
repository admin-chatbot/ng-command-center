import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { filter, map } from 'rxjs';
let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.title = '';
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .pipe(map(() => this.activatedRoute))
            .pipe(map((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
            .subscribe(route => {
            let snapshot = this.router.routerState.snapshot;
            let title = route.snapshot.data['title'];
            let parent = route.parent?.snapshot.data['breadcrumb'];
            let isEnable = route.parent?.snapshot.data['isEnable'];
            let child = route.snapshot.data['breadcrumb'];
            this.breadcrumbs = {};
            this.title = title;
            this.breadcrumbs = {
                "parentBreadcrumb": parent,
                "childBreadcrumb": child,
                "enable": isEnable
            };
        });
    }
};
BreadcrumbComponent = __decorate([
    Component({
        selector: 'app-breadcrumb',
        templateUrl: './breadcrumb.component.html',
        styleUrls: ['./breadcrumb.component.scss']
    })
], BreadcrumbComponent);
export { BreadcrumbComponent };
//# sourceMappingURL=breadcrumb.component.js.map