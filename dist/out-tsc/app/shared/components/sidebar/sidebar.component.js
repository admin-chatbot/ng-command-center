import { __decorate } from "tslib";
import { Component, HostListener } from "@angular/core";
import { NavigationEnd } from "@angular/router";
let SidebarComponent = class SidebarComponent {
    constructor(router, navService, layoutService) {
        this.router = router;
        this.navService = navService;
        this.layoutService = layoutService;
        this.leftArrowNone = true;
        this.rightArrowNone = false;
        this.margin = 0;
        this.width = window.innerWidth;
        this.isShow = false;
        this.menuItemsList = this.navService.MENUITEMS_SUPER_ADMIN;
        this.pinnedData = false;
        this.pinnedDataList = [];
        this.userType = localStorage.getItem('type');
        this.navService.items.subscribe((menuItems) => {
            this.menuItemsList = menuItems;
            this.router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.menuItemsList.filter((items) => {
                        if (items.path === event.url) {
                            this.setNavActive(items);
                        }
                        if (!items.children) {
                            return false;
                        }
                        items.children.filter((subItems) => {
                            if (subItems.path === event.url) {
                                this.setNavActive(subItems);
                            }
                            if (!subItems.children) {
                                return false;
                            }
                            subItems.children.filter((subSubItems) => {
                                if (subSubItems.path === event.url) {
                                    this.setNavActive(subSubItems);
                                }
                            });
                            return;
                        });
                        return;
                    });
                }
            });
        });
    }
    isPined(itemName) {
        return itemName !== undefined && this.pinnedDataList?.includes(itemName);
    }
    isDisplayed(access) {
        if (access == undefined) {
            return true;
        }
        let hide = false;
        access.forEach(element => {
            if (element === this.userType) {
                hide = true;
            }
        });
        return hide;
    }
    pinned(title) {
        const index = this.pinnedDataList.indexOf(title);
        if (index !== -1) {
            this.pinnedDataList.splice(index, 1);
        }
        else {
            this.pinnedDataList.push(title);
        }
        if (this.pinnedDataList.length <= 0) {
            this.pinnedData = false;
        }
        else {
            this.pinnedData = true;
        }
    }
    onResize(event) {
        this.width = event.target.innerWidth - 500;
    }
    setNavActive(item) {
        this.menuItemsList.filter(menuItem => {
            if (menuItem !== item) {
                menuItem.active = false;
            }
            if (menuItem.children && menuItem.children.includes(item)) {
                menuItem.active = true;
            }
            if (menuItem.children) {
                menuItem.children.filter(submenuItems => {
                    if (submenuItems.children && submenuItems.children.includes(item)) {
                        menuItem.active = true;
                        submenuItems.active = true;
                    }
                    else {
                        submenuItems.active = false;
                    }
                });
            }
        });
    }
    sidebarToggle() {
        this.navService.collapseSidebar = !this.navService.collapseSidebar;
    }
    toggletNavActive(item) {
        if (!item.active) {
            this.menuItemsList.forEach((a) => {
                if (this.menuItemsList.includes(item)) {
                    a.active = false;
                }
                if (!a.children) {
                    return false;
                }
                a.children.forEach((b) => {
                    if (a.children?.includes(item)) {
                        b.active = false;
                    }
                });
                return;
            });
        }
        item.active = !item.active;
    }
    scrollToLeft() {
        if (this.margin >= -this.width) {
            this.margin = 0;
            this.leftArrowNone = true;
            this.rightArrowNone = false;
        }
        else {
            this.margin += this.width;
            this.rightArrowNone = false;
        }
    }
    scrollToRight() {
        if (this.margin <= -3500) {
            this.margin = -3000;
            this.leftArrowNone = false;
            this.rightArrowNone = true;
        }
        else {
            this.margin += -this.width;
            this.leftArrowNone = false;
        }
    }
};
__decorate([
    HostListener("window:resize", ["$event"])
], SidebarComponent.prototype, "onResize", null);
SidebarComponent = __decorate([
    Component({
        selector: "app-sidebar",
        templateUrl: "./sidebar.component.html",
        styleUrls: ["./sidebar.component.scss"],
    })
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map