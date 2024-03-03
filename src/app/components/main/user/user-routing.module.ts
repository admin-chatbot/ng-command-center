import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { UsersEditsComponent } from './users-edits/users-edits.component';


const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'list',
        component: UserCardsComponent,
        data: {
          title: 'User List',
          breadcrumb: 'List',
        }
      },
      {
        path: 'create',
        component: UsersEditsComponent,
        data: {
          title: 'Create User',
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
export class UserRoutingModule { }
