import { __decorate } from "tslib";
import { Component, HostListener } from "@angular/core";
let TapToTopComponent = class TapToTopComponent {
    constructor(viewScroller) {
        this.viewScroller = viewScroller;
        this.show = false;
    }
    ngOnInit() { }
    // @HostListener Decorator
    onWindowScroll() {
        let number = window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        if (number > 600) {
            this.show = true;
        }
        else {
            this.show = false;
        }
    }
    tapToTop() {
        this.viewScroller.scrollToPosition([0, 0]);
    }
};
__decorate([
    HostListener("window:scroll", [])
], TapToTopComponent.prototype, "onWindowScroll", null);
TapToTopComponent = __decorate([
    Component({
        selector: "app-tap-to-top",
        templateUrl: "./tap-to-top.component.html",
        styleUrls: ["./tap-to-top.component.scss"],
    })
], TapToTopComponent);
export { TapToTopComponent };
//# sourceMappingURL=tap-to-top.component.js.map