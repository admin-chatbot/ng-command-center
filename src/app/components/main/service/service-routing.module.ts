import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { CreateNewComponent } from './create-new/create-new.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'list',
      component: ViewComponent,
      data: {
        title: 'Service List',
        breadcrumb: 'List',
      }
    },{
      path: 'create',
      component: CreateNewComponent,
      data: {
        title: 'Create Service',
        breadcrumb: 'create',
      }
    },     
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
