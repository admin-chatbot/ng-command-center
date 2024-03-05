import { __decorate } from "tslib";
import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/project";
let TodaysTasksComponent = class TodaysTasksComponent {
    constructor() {
        this.isShow = false;
        this.todaysTask = data.todaysTask;
    }
    opne(id) {
        this.todaysTask.filter((data) => {
            if (data.id == id) {
                this.openId = this.openId !== data.id ? data.id : 0;
            }
        });
    }
    clickOutside() {
        this.isShow = false;
    }
};
TodaysTasksComponent = __decorate([
    Component({
        selector: "app-todays-tasks",
        templateUrl: "./todays-tasks.component.html",
        styleUrls: ["./todays-tasks.component.scss"],
    })
], TodaysTasksComponent);
export { TodaysTasksComponent };
//# sourceMappingURL=todays-tasks.component.js.map