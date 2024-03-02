import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { FileUploadComponent } from './create-new/file-upload/file-upload.component';
import { SharedModule } from 'src/app/shared/shared.module';

 

@NgModule({
  declarations: [
    ProjectListComponent,
    CreateNewComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule, 
    SharedModule, 
  ]
})
export class ProjectModule { }
