import { Component, Input } from '@angular/core';
import { ServiceIntend } from '../../serviceIntend';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../../service.service';
import { ToastrService } from 'ngx-toastr';
import { EditIntentModelComponent } from '../edit-intent-model/edit-intent-model.component';
import { AddNewIntentComponent } from '../../add/add-new-intent/add-new-intent.component';

@Component({
  selector: 'app-intent', 
  templateUrl: './intent.component.html',
  styleUrl: './intent.component.scss'
})
export class IntentComponent {



  public isShow: boolean = false;
  public recentCustomers: any;
  @Input() intents:ServiceIntend[];

  constructor(private modalService: NgbModal,private serviceService:ServiceService,private service:ServiceService,private toast:ToastrService){
   
  }

  clickOutside(): void {
    this.isShow = false;
  }


  openEditModel(i: ServiceIntend) { 
    const modal = this.modalService.open(EditIntentModelComponent, {
      size: "lg",
    });
    modal.componentInstance.intent = i;
  }


  addNewIntent() {
    const addNewIntent = this.modalService.open(AddNewIntentComponent, {
      size: "lg",
    });
    addNewIntent.componentInstance.serviceId = this.intents[0].serviceId;
  }

  refresh() {
    this.fetchIntend();
  }

  fetchIntend(){
    this.service.fetchIntendsByService(this.intents[0].serviceId)
      .subscribe((response)=>{
        if (response.errorCode != undefined && response.errorCode != 200) {
          this.toast.error('Not able to fetch. please try again in sometime','ERROR');
        }else{
            this.intents = response.data;
         }
      });
  }



}
