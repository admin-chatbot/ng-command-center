import { __decorate } from "tslib";
import { Component } from '@angular/core';
let FileUploadComponent = class FileUploadComponent {
    constructor() {
        this.files2 = [];
    }
    onSelect2(event) {
        this.files2.push(...event.addedFiles);
    }
    onRemove2(event) {
        this.files2.splice(this.files2.indexOf(event), 1);
    }
};
FileUploadComponent = __decorate([
    Component({
        selector: 'app-file-upload',
        templateUrl: './file-upload.component.html',
        styleUrls: ['./file-upload.component.scss']
    })
], FileUploadComponent);
export { FileUploadComponent };
//# sourceMappingURL=file-upload.component.js.map