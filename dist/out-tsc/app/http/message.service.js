import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let MessageService = class MessageService {
    constructor() {
        this.messages = [];
        this.shortMessage = [];
    }
    add(message) {
        this.messages.push(message);
    }
    addShort(shortMessage) {
        this.shortMessage.push(shortMessage);
    }
    getMostResentMessage() {
        return this.shortMessage.pop() || '';
    }
    clear() {
        this.messages = [];
        this.shortMessage = [];
    }
};
MessageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MessageService);
export { MessageService };
//# sourceMappingURL=message.service.js.map