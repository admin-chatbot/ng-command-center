import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { FileUploadComponent } from './create-new/file-upload/file-upload.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { NgbDropdownModule, NgbModalModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectSearchComponent } from './project-list/project-search/project-search.component';

 

@NgModule({
  declarations: [
    ProjectListComponent,
    CreateNewComponent,
    FileUploadComponent,
    ProjectSearchComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule, 
    SharedModule, 
    ToastrModule,     
    NgbModalModule
  ]
})
export class ProjectModule { }
