import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ProjectListComponent = class ProjectListComponent {
    constructor(applicationService, toast) {
        this.applicationService = applicationService;
        this.toast = toast;
        this.active = 1;
        this.openTab = "ACTIVE";
        this.fetchApplication();
    }
    ngAfterViewInit() {
        //this.applicationFilterData = val !== 'ACTIVE'
    }
    ngOnInit() {
    }
    fetchApplication() {
        this.applicationService.fetchApplication()
            .subscribe(res => {
            if (res.errorCode != undefined && res.errorCode != 200) {
                this.toast.error('Not able to onboard. please try again in sometime', 'ERROR');
            }
            else {
                this.applications = res.data;
                this.applicationFilterData = this.applications.filter((data) => {
                    return data.status == 'ACTIVE' ? true : false;
                });
            }
        });
    }
    tabbed(val) {
        this.openTab = val;
        this.applicationFilterData = val !== 'All' ? this.applications.filter((data) => {
            return data.status == this.openTab ? true : false;
        }) : this.applications;
    }
};
ProjectListComponent = __decorate([
    Component({
        selector: 'app-project-list',
        templateUrl: './project-list.component.html',
        styleUrls: ['./project-list.component.scss']
    })
], ProjectListComponent);
export { ProjectListComponent };
//# sourceMappingURL=project-list.component.js.map