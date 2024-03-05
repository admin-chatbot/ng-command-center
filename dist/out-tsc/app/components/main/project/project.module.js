import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { FileUploadComponent } from './create-new/file-upload/file-upload.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
let ProjectModule = class ProjectModule {
};
ProjectModule = __decorate([
    NgModule({
        declarations: [
            ProjectListComponent,
            CreateNewComponent,
            FileUploadComponent
        ],
        imports: [
            CommonModule,
            ProjectRoutingModule,
            SharedModule,
            ToastrModule
        ]
    })
], ProjectModule);
export { ProjectModule };
//# sourceMappingURL=project.module.js.map