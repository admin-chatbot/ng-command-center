import { __decorate } from "tslib";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../../shared/shared.module";
import { CommanDataComponent } from "./comman-data/comman-data.component";
import { FaqRoutingModule } from "./faq-routing.module";
import { FaqComponent } from "./faq.component";
import { FeaturedTutorialsComponent } from "./featured-tutorials/featured-tutorials.component";
import { LatestArticlesVideosComponent } from "./latest-articles-videos/latest-articles-videos.component";
import { LatestUpdatesComponent } from "./latest-updates/latest-updates.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { QuestionsComponent } from "./questions/questions.component";
import { SearchArticlesComponent } from "./search-articles/search-articles.component";
let FaqModule = class FaqModule {
};
FaqModule = __decorate([
    NgModule({
        declarations: [
            FaqComponent,
            CommanDataComponent,
            QuestionsComponent,
            SearchArticlesComponent,
            NavigationComponent,
            LatestUpdatesComponent,
            FeaturedTutorialsComponent,
            LatestArticlesVideosComponent,
        ],
        imports: [
            CommonModule,
            FaqRoutingModule,
            SharedModule,
        ],
        exports: [
            CommanDataComponent,
            FeaturedTutorialsComponent,
            LatestArticlesVideosComponent,
        ],
    })
], FaqModule);
export { FaqModule };
//# sourceMappingURL=faq.module.js.map