import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { DetailComponent } from './detail/detail.component';

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
    {
      path: 'detail',
      component: DetailComponent,
      data: {
        title: 'Service Detail',
        breadcrumb: 'detail',
      }
    },     
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
