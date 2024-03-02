import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { PrivateChatComponent } from './private-chat/private-chat.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'api',
        component: PrivateChatComponent,
        data: {
          title: 'Private Chat',
          breadcrumb: 'Private Chat',
        }
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
