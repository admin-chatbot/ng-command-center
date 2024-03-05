import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, debounceTime, fromEvent, takeUntil } from "rxjs";
let NavService = class NavService {
    constructor(router) {
        this.router = router;
        this.screenWidth = new BehaviorSubject(window.innerWidth);
        this.unsubscriber = new Subject();
        this.language = false;
        this.collapseSidebar = window.innerWidth < 1200 ? true : false;
        this.MENUITEMS_SUPER_ADMIN = [
            {
                headTitle1: "General",
            },
            {
                level: 1, title: "Dashboards", icon: "home", path: "main/dashboard", type: "link", access: ['SUPER_ADMIN', 'CLIENT_ADMIN', 'USER']
            },
            {
                level: 1,
                title: "Company",
                icon: "project",
                type: "sub",
                active: false,
                children: [
                    { path: "main/company/list", title: "Company List", type: "link" },
                    { path: "main/company/create", title: "Company New", type: "link" },
                ],
                access: ['SUPER_ADMIN']
            },
            {
                level: 1,
                title: "Application",
                icon: "project",
                type: "sub",
                active: false,
                children: [
                    { path: "main/project/list", title: "Project List", type: "link" },
                    { path: "main/project/create", title: "Create New", type: "link" },
                ],
                access: ['SUPER_ADMIN', 'CLIENT_ADMIN']
            },
            {
                level: 1,
                title: "Service",
                icon: "project",
                type: "sub",
                active: false,
                children: [
                    { path: "main/service/list", title: "Service List", type: "link" },
                    { path: "main/service/create", title: "Service New", type: "link" },
                ],
                access: ['SUPER_ADMIN', 'CLIENT_ADMIN', 'USER']
            },
            {
                level: 1,
                title: "Flow",
                icon: "project",
                type: "sub",
                active: false,
                children: [
                    { path: "main/flow/list", title: "Flow List", type: "link" },
                    { path: "main/flow/create", title: "Flow New", type: "link" },
                ],
            },
            {
                level: 1, title: "Database", icon: "ecommerce", path: "main/db", type: "link", active: false
            },
            {
                level: 1, title: "Document", icon: "ecommerce", path: "main/document", type: "link", active: false
            },
            {
                level: 1,
                title: "User",
                icon: "user",
                type: "sub",
                active: false,
                children: [
                    { path: "main/user/list", title: "User List", type: "link" },
                    { path: "main/user/create", title: "User New", type: "link" },
                ],
                access: ['SUPER_ADMIN', 'CLIENT_ADMIN']
            },
            {
                headTitle1: "CHATS",
            },
            {
                level: 1, title: "Chat With API", icon: "ecommerce", path: "main/chat/api", type: "link", active: false
            },
            {
                level: 1, title: "Chat With Document", icon: "ecommerce", path: "main/chat/document", type: "link", active: false
            },
            {
                level: 1, title: "Chat With DB", icon: "ecommerce", path: "/chat/SQL", type: "link", active: false
            },
            { headTitle1: "SUPPORT" },
            { level: 1, path: "main/faq", title: "FAQ", icon: "faq", type: "link", active: false },
            {
                level: 1,
                path: "main/knowledgebase",
                title: "Knowledgebase",
                icon: "knowledgebase",
                type: "link",
                active: false,
            },
            {
                level: 1,
                path: "main/support-ticket",
                title: "Support Ticket",
                icon: "support-tickets",
                type: "link",
                active: false,
            },
            { headTitle1: "" },
            { level: 1, path: "main/billing", title: "Billing", icon: "support-tickets", type: "link", active: false },
        ];
        this.items = new BehaviorSubject(this.MENUITEMS_SUPER_ADMIN);
        this.setScreenWidth(window.innerWidth);
        fromEvent(window, "resize")
            .pipe(debounceTime(0), takeUntil(this.unsubscriber))
            .subscribe((evt) => {
            this.setScreenWidth(evt.target.innerWidth);
            if (evt.target.innerWidth < 1200) {
                this.collapseSidebar = true;
            }
            else {
                this.collapseSidebar = false;
            }
        });
    }
    setScreenWidth(width) {
        this.screenWidth.next(width);
    }
    ngOnDestroy() {
        this.unsubscriber.complete();
    }
};
NavService = __decorate([
    Injectable({
        providedIn: "root",
    })
], NavService);
export { NavService };
//# sourceMappingURL=nav.service.js.map