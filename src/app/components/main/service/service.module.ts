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
import { BrandComponent } from './detail/brand/brand.component';
import { DescriptionTabComponent } from './detail/description-tab/description-tab.component';
import { ProductDetailsComponent } from './detail/product-details/product-details.component';


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
    BrandComponent,
    DescriptionTabComponent,
    ProductDetailsComponent
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
