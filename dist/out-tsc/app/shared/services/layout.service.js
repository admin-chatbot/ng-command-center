import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LayoutService = class LayoutService {
    constructor() {
        this.customizer = '';
        this.config = {
            settings: {
                layout_type: 'ltr',
                layout_version: 'dark-sidebar',
                sidebar_type: 'compact-wrapper',
                icon: "stroke-svg",
            },
            color: {
                primary_color: '#7A70BA',
                secondary_color: '#48A3D7',
            },
        };
    }
};
LayoutService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LayoutService);
export { LayoutService };
//# sourceMappingURL=layout.service.js.map