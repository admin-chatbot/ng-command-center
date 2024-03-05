import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FaqComponent } from "./faq.component";
const routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: FaqComponent,
                data: {
                    title: "FAQ",
                    breadcrumb: "FAQ",
                },
            },
        ],
    },
];
let FaqRoutingModule = class FaqRoutingModule {
};
FaqRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], FaqRoutingModule);
export { FaqRoutingModule };
//# sourceMappingURL=faq-routing.module.js.map