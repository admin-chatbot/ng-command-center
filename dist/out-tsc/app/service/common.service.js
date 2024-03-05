import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CommonService = class CommonService {
    constructor() {
        this.stringFilterOperations = [
            { 'key': 'EQUAL', 'value': 'eq' },
            { 'key': 'NOT EQUAL', 'value': 'neg' },
            { 'key': 'LIKE', 'value': 'like' },
            { 'key': 'START WITH', 'value': 'slike' },
            { 'key': 'END WITH', 'value': 'elike' },
        ];
        this.numberFilterOperations = [
            { 'key': 'EQUAL', 'value': 'eq' },
            { 'key': 'NOT EQUAL', 'value': 'neg' },
            { 'key': 'GREATER THAN', 'value': 'gt' },
            { 'key': 'GREATER THAN EQUAL', 'value': 'gte' },
            { 'key': 'LESS THAN', 'value': 'lt' },
            { 'key': 'LESS THAN OR EQUAL', 'value': 'lte' },
            { 'key': 'IN', 'value': 'in' },
            { 'key': 'NOT IN', 'value': 'nin' },
        ];
        this.status = ['NEW', 'REVIEW', 'ACTIVE', 'HOLD', 'INACTIVE'];
    }
};
CommonService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CommonService);
export { CommonService };
//# sourceMappingURL=common.service.js.map