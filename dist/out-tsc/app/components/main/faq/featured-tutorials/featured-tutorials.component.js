import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let FeaturedTutorialsComponent = class FeaturedTutorialsComponent {
    constructor(config) {
        this.config = config;
        config.max = 5;
        config.readonly = true;
    }
};
__decorate([
    Input()
], FeaturedTutorialsComponent.prototype, "data", void 0);
FeaturedTutorialsComponent = __decorate([
    Component({
        selector: 'app-featured-tutorials',
        templateUrl: './featured-tutorials.component.html',
        styleUrls: ['./featured-tutorials.component.scss']
    })
], FeaturedTutorialsComponent);
export { FeaturedTutorialsComponent };
//# sourceMappingURL=featured-tutorials.component.js.map