import { __decorate } from "tslib";
import { Component } from "@angular/core";
let ThemeModeComponent = class ThemeModeComponent {
    constructor(layout) {
        this.layout = layout;
        this.dark = this.layout.config.settings.layout_version == "dark-only" ? true : false;
    }
    layoutToggle() {
        this.dark = !this.dark;
        this.dark ? document.body.classList.add("dark-only") : document.body.classList.remove("dark-only");
        this.layout.config.settings.layout_version = this.dark ? "dark-only" : "light";
    }
};
ThemeModeComponent = __decorate([
    Component({
        selector: "app-theme-mode",
        templateUrl: "./theme-mode.component.html",
        styleUrls: ["./theme-mode.component.scss"],
    })
], ThemeModeComponent);
export { ThemeModeComponent };
//# sourceMappingURL=theme-mode.component.js.map