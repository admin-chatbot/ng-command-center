import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { DetailComponent } from './detail/detail.component';
import { DiscoverServiceComponent } from './discover-service/discover-service.component';

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
    {
      path: 'discover',
      component: DiscoverServiceComponent,
      data: {
        title: 'Service Discover',
        breadcrumb: 'discover',
      }
    },     
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
