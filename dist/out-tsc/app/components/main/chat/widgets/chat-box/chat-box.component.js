import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as data from '../.././../../../shared/data/data/chat/chat';
let ChatBoxComponent = class ChatBoxComponent {
    constructor() {
        this.chatData = data.massage;
        this.isShow = false;
        this.showEmojiPicker = false;
    }
};
ChatBoxComponent = __decorate([
    Component({
        selector: 'app-chat-box',
        templateUrl: './chat-box.component.html',
        styleUrls: ['./chat-box.component.scss']
    })
], ChatBoxComponent);
export { ChatBoxComponent };
//# sourceMappingURL=chat-box.component.js.map