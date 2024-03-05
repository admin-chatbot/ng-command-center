import { __decorate } from "tslib";
import { Component, HostListener } from "@angular/core";
let ContentComponent = class ContentComponent {
    constructor(navService, layout) {
        this.navService = navService;
        this.layout = layout;
        this.footerFix = false;
        this.footerLight = false;
        this.footerDark = false;
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
    }
    onResize(event) {
        if (window.innerWidth < 1200) {
            this.layout.config.settings.sidebar_type = "page-wrapper compact-wrapper";
        }
    }
    get layoutClass() {
        return (this.layout.config.settings.sidebar_type + '');
    }
    ngDoCheck() {
        if (window.location.pathname == "/page-layout/footer-dark") {
            this.footerDark = true;
            this.footerLight = false;
            this.footerFix = false;
        }
        else if (window.location.pathname == '/page-layout/footer-light') {
            this.footerLight = true;
            this.footerDark = false;
            this.footerFix = false;
        }
        else if (window.location.pathname == '/page-layout/footer-fixed') {
            this.footerFix = true;
            this.footerLight = false;
            this.footerDark = false;
        }
    }
    ngOnDestroy() {
        this.footerDark = false;
    }
};
__decorate([
    HostListener("window:resize", ["$event"])
], ContentComponent.prototype, "onResize", null);
ContentComponent = __decorate([
    Component({
        selector: "app-content",
        templateUrl: "./content.component.html",
        styleUrls: ["./content.component.scss"],
    })
], ContentComponent);
export { ContentComponent };
//# sourceMappingURL=content.component.js.map