import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrivateChatComponent } from './private-chat/private-chat.component';
const routes = [
    {
        path: '',
        children: [
            {
                path: 'api',
                component: PrivateChatComponent,
                data: {
                    title: 'Private Chat',
                    breadcrumb: 'Private Chat',
                }
            },
        ]
    }
];
let ChatRoutingModule = class ChatRoutingModule {
};
ChatRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], ChatRoutingModule);
export { ChatRoutingModule };
//# sourceMappingURL=chat-routing.module.js.map