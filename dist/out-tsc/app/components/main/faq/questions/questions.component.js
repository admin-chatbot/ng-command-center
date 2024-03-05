import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { questionData } from '../../../../shared/data/data/faq/faq';
let QuestionsComponent = class QuestionsComponent {
    constructor(config) {
        this.questionData = questionData;
        config.closeOthers = true;
    }
};
QuestionsComponent = __decorate([
    Component({
        selector: 'app-questions',
        templateUrl: './questions.component.html',
        styleUrls: ['./questions.component.scss']
    })
], QuestionsComponent);
export { QuestionsComponent };
//# sourceMappingURL=questions.component.js.map