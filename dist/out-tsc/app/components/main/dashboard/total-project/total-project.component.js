import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/general/apex-chart';
let TotalProjectComponent = class TotalProjectComponent {
    constructor() {
        this.isShow = false;
        this.totalProject = data.totalProject;
    }
    clickOutside() {
        this.isShow = false;
    }
};
TotalProjectComponent = __decorate([
    Component({
        selector: 'app-total-project',
        templateUrl: './total-project.component.html',
        styleUrls: ['./total-project.component.scss']
    })
], TotalProjectComponent);
export { TotalProjectComponent };
//# sourceMappingURL=total-project.component.js.map