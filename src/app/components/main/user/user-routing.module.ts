import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { UsersEditsComponent } from './users-edits/users-edits.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserSearchComponent } from './user-cards/user-search/user-search.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'list',
        component: UserCardsComponent,
        data: {
          title: 'User List',
          breadcrumb: 'list',
        }
      },
      {
        path: 'create',
        component: CreateNewComponent,
        data: {
          title: 'Create User',
          breadcrumb: 'create',
        }
      },

      {
        path: 'search',
        component: SearchComponent,
        data: {
          title: 'User search',
          breadcrumb: 'search',
        }
      },
      {
        path: 'edit',  // Add ':id' here to make it a dynamic parameter
        component: EditUserComponent,
        data: {
          title: 'Edit User',
          breadcrumb: 'edit',
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
