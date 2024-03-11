import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TrimPipe } from 'src/app/pipe/trim.pipe';
import { ViewComponent } from './view/view.component';
import { DetailModelComponent } from './view/detail-model/detail-model.component';
import { PrettyJsonPipe } from 'src/app/pipe/pretty-json.pipe';
import { CreateNewComponent } from './create-new/create-new.component';
import { AddServiceTabComponent } from './create-new/add-service-tab/add-service-tab.component';
import { AddServiceDetailsComponent } from './create-new/add-service-details/add-service-details.component';
import { AddServiceIntentComponent } from './create-new/add-service-intent/add-service-intent.component';
import { AddServiceParameterComponent } from './create-new/add-service-parameter/add-service-parameter.component';
import { DetailComponent } from './detail/detail.component'; 
import { IntentComponent } from './detail/intent/intent.component';
import { ParameterComponent } from './detail/parameter/parameter.component';
import { ServiceDetailComponent } from './detail/service-detail/service-detail.component';


@NgModule({
  declarations: [
    ViewComponent,
    DetailModelComponent,
    CreateNewComponent,
    AddServiceTabComponent,
    AddServiceDetailsComponent,
    AddServiceIntentComponent,
    AddServiceParameterComponent,
    DetailComponent,      
    IntentComponent,
    ParameterComponent,
    ServiceDetailComponent
  ],
  providers : [
    PrettyJsonPipe
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    SharedModule,
    ToastrModule,
    NgbModalModule, 
    NgbTooltipModule,
    TrimPipe, 
    NgbModalModule,
    PrettyJsonPipe,
     
  ]
})
export class ServiceModule { }
