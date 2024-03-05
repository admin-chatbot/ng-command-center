import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/project';
let RecentProjectsComponent = class RecentProjectsComponent {
    constructor() {
        this.isCalender = false;
        this.tableData = data.tableData;
    }
    openMenu(id) {
        this.tableData.filter((data) => {
            if (data.id === id) {
                this.openId = this.openId !== data.id ? data.id : 0;
            }
        });
    }
    clickOutside() {
        this.isCalender = false;
    }
};
RecentProjectsComponent = __decorate([
    Component({
        selector: 'app-recent-projects',
        templateUrl: './recent-projects.component.html',
        styleUrls: ['./recent-projects.component.scss']
    })
], RecentProjectsComponent);
export { RecentProjectsComponent };
//# sourceMappingURL=recent-projects.component.js.map