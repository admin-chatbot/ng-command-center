import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
let SearchService = class SearchService {
    constructor(navServices) {
        this.navServices = navServices;
        this.text = "";
        this.itemsData = [];
        this.menuItems = [];
        this.searchResult = false;
        this.searchResultEmpty = false;
        this.navServices.items.subscribe((menuItems) => (this.itemsData = menuItems));
    }
    searchTerm(term) {
        term ? this.addFix() : this.removeFix();
        if (!term)
            return (this.menuItems = []);
        let itemsData = [];
        term = term.toLowerCase();
        this.itemsData.forEach((data) => {
            if (!data?.title)
                return false;
            if (data.title.toLowerCase().includes(term) && data.type === "link") {
                itemsData.push(data);
            }
            if (!data.children)
                return false;
            data.children.filter((subItems) => {
                if (subItems.title?.toLowerCase().includes(term) &&
                    subItems.type === "link") {
                    subItems.icon = data.icon;
                    itemsData.push(subItems);
                }
                if (!subItems.children)
                    return false;
                subItems.children.filter((suSubItems) => {
                    if (suSubItems.title?.toLowerCase().includes(term)) {
                        suSubItems.icon = data.icon;
                        itemsData.push(suSubItems);
                    }
                });
                return;
            });
            this.checkSearchResultEmpty(itemsData);
            this.menuItems = itemsData;
            return;
        });
        return;
    }
    checkSearchResultEmpty(items) {
        if (!items.length)
            this.searchResultEmpty = true;
        else
            this.searchResultEmpty = false;
    }
    addFix() {
        this.searchResult = true;
        document.body.classList.add("offcanvas");
    }
    clickOutside() {
        this.text = "";
        this.searchResult = false;
        this.searchResultEmpty = false;
        document.body.classList.remove("offcanvas");
    }
    removeFix() {
        this.text = "";
        this.searchResult = false;
        document.body.classList.remove("offcanvas");
    }
};
SearchService = __decorate([
    Injectable({
        providedIn: "root",
    })
], SearchService);
export { SearchService };
//# sourceMappingURL=search.service.js.map