import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ProductService = class ProductService {
    constructor() {
        this.sidebaron = false;
        this.show = false;
        this.open = false;
        this.listView = false;
        this.col_xl_12 = false;
        this.col_xl_2 = false;
        this.col_sm_3 = false;
        this.col_xl_3 = true;
        this.xl_4 = true;
        this.col_sm_4 = false;
        this.col_xl_4 = false;
        this.col_sm_6 = true;
        this.col_xl_6 = false;
        this.gridOptions = true;
        this.active = false;
    }
    openMediaFilter() {
        if (this.show == false && this.sidebaron == false && this.open == false) {
            this.show = true;
            this.sidebaron = true;
            this.open = true;
        }
        else {
            this.show = false;
            this.sidebaron = false;
            this.open = false;
        }
    }
    gridOpen() {
        this.gridOptions = true;
        this.listView = false;
        this.col_xl_3 = true;
        this.xl_4 = true;
        this.col_xl_4 = false;
        this.col_sm_4 = false;
        this.col_xl_6 = false;
        this.col_sm_6 = true;
        this.col_xl_2 = false;
        this.col_xl_12 = false;
    }
    listOpen() {
        this.gridOptions = false;
        this.listView = true;
        this.col_xl_3 = true;
        this.xl_4 = true;
        this.col_xl_12 = true;
        this.col_xl_2 = false;
        this.col_xl_4 = false;
        this.col_sm_4 = false;
        this.col_xl_6 = false;
        this.col_sm_6 = true;
    }
    grid2() {
        this.listView = false;
        this.col_xl_3 = false;
        this.col_sm_3 = false;
        this.col_xl_2 = false;
        this.col_xl_4 = false;
        this.col_sm_4 = false;
        this.col_xl_6 = true;
        this.col_sm_6 = true;
        this.col_xl_12 = false;
    }
    grid3() {
        this.listView = false;
        this.col_xl_3 = false;
        this.col_sm_3 = false;
        this.col_xl_2 = false;
        this.col_xl_4 = true;
        this.col_sm_4 = true;
        this.col_xl_6 = false;
        this.col_sm_6 = false;
        this.col_xl_12 = false;
    }
    grid6() {
        this.listView = false;
        this.col_xl_3 = false;
        this.col_sm_3 = false;
        this.col_xl_2 = true;
        this.col_xl_4 = false;
        this.col_sm_4 = false;
        this.col_xl_6 = false;
        this.col_sm_6 = false;
        this.col_xl_12 = false;
    }
};
ProductService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map