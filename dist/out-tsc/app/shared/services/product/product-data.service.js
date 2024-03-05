import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
let ProductDataService = class ProductDataService {
    constructor(http) {
        this.http = http;
    }
    products() {
        return this.http.get('assets/data/product.json').pipe(map((res) => {
            return res;
        }));
    }
    getProduct(id) {
        return this.products().pipe(map((items) => {
            return items.find((item) => {
                return item.id === id;
            });
        }));
    }
};
ProductDataService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductDataService);
export { ProductDataService };
//# sourceMappingURL=product-data.service.js.map