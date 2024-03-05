import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoaderComponent = class LoaderComponent {
    constructor() {
        this.show = true;
        setTimeout(() => {
            this.show = false;
        }, 3000);
    }
};
LoaderComponent = __decorate([
    Component({
        selector: 'app-loader',
        templateUrl: './loader.component.html',
        styleUrls: ['./loader.component.scss']
    })
], LoaderComponent);
export { LoaderComponent };
//# sourceMappingURL=loader.component.js.map