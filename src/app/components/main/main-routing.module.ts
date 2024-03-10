import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'dashboard',
        component : DashboardComponent,
        data: {
          title: "Dashboard",
          breadcrumb: "dashboard",
        }
      }, 
      {
        path: 'project',
        data: {
            title: "Project",
            breadcrumb: "Project",
      },
      loadChildren: () => import('../../components/main/project/project.module').then(m => m.ProjectModule),
      }, 
      {
        path: 'service',
        data: {
            title: "Service",
            breadcrumb: "Service",
      },
      loadChildren: () => import('../../components/main/service/service.module').then(m => m.ServiceModule),
      },   
      {
        path: 'chat',
        data: {
            title: "Chat",
            breadcrumb: "Chat",
        },
        loadChildren: () => import('../../components/main/chat/chat.module').then(m => m.ChatModule),
      },  
      {
        path: 'faq',
        data: {
            title: "FAQ",
            breadcrumb: "",
        },
        loadChildren: () => import('../../components/main/faq/faq.module').then(m => m.FaqModule),
    },   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
