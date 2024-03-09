import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileSecoundComponent } from './user-profile/user-profile-secound/user-profile-secound.component';
import { UserProfileThirdComponent } from './user-profile/user-profile-third/user-profile-third.component';
import { UserProfileFourthComponent } from './user-profile/user-profile-fourth/user-profile-fourth.component';
import { UserProfileFifthComponent } from './user-profile/user-profile-fifth/user-profile-fifth.component';
import { UserProfileFirstComponent } from './user-profile/user-profile-first/user-profile-first.component';
import { UsersEditsComponent } from './users-edits/users-edits.component';
import { MyProfilComponent } from './users-edits/my-profil/my-profil.component';
import { EditProfileComponent } from './users-edits/edit-profile/edit-profile.component';
import { AddUpdateProjectsComponent } from './users-edits/add-update-projects/add-update-projects.component';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { ToastrModule } from 'ngx-toastr';
import { NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TrimPipe } from 'src/app/pipe/trim.pipe';
import { UserSearchComponent } from './user-cards/user-search/user-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateNewComponent } from './create-new/create-new.component';


@NgModule({
  declarations: [UserProfileComponent,
    UserProfileSecoundComponent,
    UserProfileThirdComponent,
    UserProfileFourthComponent    ,
    UserProfileFifthComponent,
    CreateNewComponent,
    UserProfileFirstComponent,
    UserSearchComponent,
    UsersEditsComponent,
    MyProfilComponent,
    EditProfileComponent,
    AddUpdateProjectsComponent,
    UserCardsComponent],
    providers: [
      TrimPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ToastrModule,
    NgbModalModule, 
    NgbTooltipModule,
    TrimPipe, 
    NgbModalModule,
    ReactiveFormsModule

  ]
})
export class UserModule { }
