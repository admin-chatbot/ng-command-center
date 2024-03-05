import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let DataService = class DataService {
    constructor() {
        this.sourceUrlSource = new BehaviorSubject("");
        this.currentMessage = this.sourceUrlSource.asObservable();
    }
    changeUrl(message) {
        this.sourceUrlSource.next(message);
    }
};
DataService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map