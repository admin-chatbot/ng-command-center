import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/project';
let ProjectStatusComponent = class ProjectStatusComponent {
    constructor() {
        this.isShow = false;
        this.projectStatus = data.projectStatus;
    }
    clickOutside() {
        this.isShow = false;
    }
};
ProjectStatusComponent = __decorate([
    Component({
        selector: 'app-project-status',
        templateUrl: './project-status.component.html',
        styleUrls: ['./project-status.component.scss']
    })
], ProjectStatusComponent);
export { ProjectStatusComponent };
//# sourceMappingURL=project-status.component.js.map