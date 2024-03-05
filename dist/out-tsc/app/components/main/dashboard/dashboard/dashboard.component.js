import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/project';
let DashboardComponent = class DashboardComponent {
    constructor() {
        this.websiteDesign = data.websiteDesign;
        this.socialPostDesign = data.socialPostDesign;
        this.podcastWebDesign = data.podcastWebDesign;
        this.cryptoDashboard = data.cryptoDashboard;
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrl: './dashboard.component.scss'
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map