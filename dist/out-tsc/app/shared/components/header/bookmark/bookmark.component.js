import { __decorate } from "tslib";
import { Component, Input } from "@angular/core";
let BookmarkComponent = class BookmarkComponent {
    constructor(navServices) {
        this.navServices = navServices;
        this.isFlip = false;
        this.menuItems = [];
        this.items = [];
        this.bookmarkItems = [];
        this.text = "";
        this.bookmarkFlip = false;
        this.bookmark = false;
        this.open = false;
        this.searchResult = false;
        this.searchResultEmpty = false;
    }
    ngOnInit() {
        this.navServices.items.subscribe((menuItems) => {
            this.items = menuItems;
            this.items.filter((items) => {
                if (items.bookmark) {
                    this.bookmarkItems.push(items);
                }
                if (!items.children)
                    return false;
                items.children.filter((subItems) => {
                    if (subItems.bookmark) {
                        this.bookmarkItems.push(subItems);
                    }
                });
                return;
            });
        });
    }
    searchTerm(term) {
        term ? this.addFix() : this.removeFix();
        if (!term) {
            this.open = false;
            return (this.menuItems = []);
        }
        const items = [];
        term = term.toLowerCase();
        this.items.filter((menuItems) => {
            if (!menuItems?.title)
                return false;
            if (menuItems.title.toLowerCase().includes(term) &&
                menuItems.type === "link") {
                items.push(menuItems);
            }
            if (!menuItems.children) {
                return false;
            }
            menuItems.children.filter((subItems) => {
                if (subItems?.title?.toLowerCase().includes(term) &&
                    subItems.type === "link") {
                    subItems.icon = menuItems.icon;
                    items.push(subItems);
                }
                if (!subItems.children) {
                    return false;
                }
                subItems.children.filter((suSubItems) => {
                    if (suSubItems?.title?.toLowerCase().includes(term)) {
                        suSubItems.icon = menuItems.icon;
                        items.push(suSubItems);
                    }
                });
                return;
            });
            this.checkSearchResultEmpty(items);
            return (this.menuItems = items);
        });
        return;
    }
    checkSearchResultEmpty(items) {
        if (!items.length) {
            this.searchResultEmpty = true;
        }
        else {
            this.searchResultEmpty = false;
        }
    }
    addFix() {
        this.searchResult = true;
    }
    removeFix() {
        this.searchResult = false;
        this.text = "";
    }
    addToBookmark(items) {
        const index = this.bookmarkItems.indexOf(items);
        if (index === -1 && !items.bookmark) {
            items.bookmark = true;
            this.bookmarkItems.push(items);
            this.text = "";
        }
        else {
            this.bookmarkItems.splice(index, 1);
            items.bookmark = false;
        }
    }
};
__decorate([
    Input()
], BookmarkComponent.prototype, "item", void 0);
BookmarkComponent = __decorate([
    Component({
        selector: "app-bookmark",
        templateUrl: "./bookmark.component.html",
        styleUrls: ["./bookmark.component.scss"],
    })
], BookmarkComponent);
export { BookmarkComponent };
//# sourceMappingURL=bookmark.component.js.map