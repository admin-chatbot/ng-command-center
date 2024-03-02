import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { CreateNewComponent } from './create-new/create-new.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'list',
        component: ProjectListComponent,
        data: {
          title: 'Project List',
          breadcrumb: 'List',
        }
      },
      {
        path: 'create',
        component: CreateNewComponent,
        data: {
          title: 'Create New Project',
          breadcrumb: 'Create',
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
