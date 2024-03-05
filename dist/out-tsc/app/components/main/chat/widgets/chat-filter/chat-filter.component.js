import { __decorate } from "tslib";
import { Component } from "@angular/core";
import * as data from "../../../../../shared/data/data/chat/chat";
let ChatFilterComponent = class ChatFilterComponent {
    constructor() {
        this.openTab = "chats";
        this.chat = data.chat;
        this.Contacts = data.Contacts;
        this.isShow = false;
    }
    tabbed(val) {
        this.openTab = val;
    }
    open(id, item) {
        this.Contacts.forEach((data) => {
            if (data.id = item.id) {
                data.item.forEach((element) => {
                    if (element.id == id) {
                        this.openId = this.openId !== data.id ? data.id : 0;
                    }
                });
            }
        });
    }
};
ChatFilterComponent = __decorate([
    Component({
        selector: "app-chat-filter",
        templateUrl: "./chat-filter.component.html",
        styleUrls: ["./chat-filter.component.scss"],
    })
], ChatFilterComponent);
export { ChatFilterComponent };
//# sourceMappingURL=chat-filter.component.js.map