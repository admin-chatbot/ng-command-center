import { __decorate } from "tslib";
import { Component } from "@angular/core";
let HeaderComponent = class HeaderComponent {
    constructor(navService, searchService) {
        this.navService = navService;
        this.searchService = searchService;
        this.isFlip = false;
        this.isSearchOpen = false;
        this.open = false;
    }
    sidebarToggle() {
        this.navService.collapseSidebar = !this.navService.collapseSidebar;
    }
};
HeaderComponent = __decorate([
    Component({
        selector: "app-header",
        templateUrl: "./header.component.html",
        styleUrls: ["./header.component.scss"],
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map