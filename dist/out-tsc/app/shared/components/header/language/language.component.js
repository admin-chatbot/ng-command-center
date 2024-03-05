import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LanguageComponent = class LanguageComponent {
    constructor(navServices, translateService) {
        this.navServices = navServices;
        this.translateService = translateService;
        this.language = false;
        this.languages = [{
                language: 'English',
                code: 'en',
                type: 'US',
                icon: 'us'
            },
            {
                language: 'Español',
                code: 'es',
                icon: 'es'
            },
            {
                language: 'Français',
                code: 'fr',
                icon: 'fr'
            },
            {
                language: 'Português',
                code: 'pt',
                type: 'BR',
                icon: 'pt'
            }];
        this.selectedLanguage = {
            language: 'English',
            code: 'en',
            type: 'US',
            icon: 'us'
        };
    }
    changeLanguage(lang) {
        this.translateService.use(lang.code);
        this.selectedLanguage = lang;
    }
};
LanguageComponent = __decorate([
    Component({
        selector: 'app-language',
        templateUrl: './language.component.html',
        styleUrls: ['./language.component.scss']
    })
], LanguageComponent);
export { LanguageComponent };
//# sourceMappingURL=language.component.js.map