import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { articlesAndVideosData, commanTopData } from '../../../shared/data/data/faq/faq';
import { featuredTutorialData } from '../../../shared/data/data/faq/faq';
let FaqComponent = class FaqComponent {
    constructor() {
        this.commanData = commanTopData;
        this.featuredTutorialData = featuredTutorialData;
        this.articlesAndVideosData = articlesAndVideosData;
    }
};
FaqComponent = __decorate([
    Component({
        selector: 'app-faq',
        templateUrl: './faq.component.html',
        styleUrls: ['./faq.component.scss']
    })
], FaqComponent);
export { FaqComponent };
//# sourceMappingURL=faq.component.js.map