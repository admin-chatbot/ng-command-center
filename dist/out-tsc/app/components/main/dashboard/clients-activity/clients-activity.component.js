import { __decorate } from "tslib";
import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/project";
let ClientsActivityComponent = class ClientsActivityComponent {
    constructor() {
        this.isShow = false;
        this.isOpen = false;
        this.ClientActivity = data.ClientActivity;
    }
    open(id) {
        this.ClientActivity.filter((datas) => {
            if (datas.id == id) {
                this.openId = this.openId !== datas.id ? datas.id : 0;
            }
        });
    }
    clickOutside() {
        this.isShow = false;
    }
};
ClientsActivityComponent = __decorate([
    Component({
        selector: "app-clients-activity",
        templateUrl: "./clients-activity.component.html",
        styleUrls: ["./clients-activity.component.scss"],
    })
], ClientsActivityComponent);
export { ClientsActivityComponent };
//# sourceMappingURL=clients-activity.component.js.map