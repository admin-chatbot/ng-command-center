import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/general/apex-chart';
let ProjectsOverviewComponent = class ProjectsOverviewComponent {
    constructor() {
        this.isShow = false;
        this.orderOverview = data.orderOverview;
        this.ordeRbar = data.ordeRbar;
    }
    clickOutside() {
        this.isShow = false;
    }
};
ProjectsOverviewComponent = __decorate([
    Component({
        selector: 'app-projects-overview',
        templateUrl: './projects-overview.component.html',
        styleUrls: ['./projects-overview.component.scss']
    })
], ProjectsOverviewComponent);
export { ProjectsOverviewComponent };
//# sourceMappingURL=projects-overview.component.js.map