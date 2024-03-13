import { Component, Input } from '@angular/core'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceParameter } from 'src/app/entity/serviceParameters';
import { ServiceService } from '../../service.service'; 
import { ParameterIntentModelComponent } from '../parameter-intent-model/parameter-intent-model.component';
import { AddNewParameterComponent } from '../../add/add-new-parameter/add-new-parameter.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-parameter', 
  templateUrl: './parameter.component.html',
  styleUrl: './parameter.component.scss'
})
export class ParameterComponent {



  public openTab: string = "febric"; 
  @Input() parameters: ServiceParameter[];
  @Input() serviceId:number

  constructor(private service:ServiceService,private modalService: NgbModal,private toast:ToastrService){
   
  }

  public tabbed(val: string) {
    this.openTab = val;
  }

  openEditModel(_t19: ServiceParameter) {
    const modal = this.modalService.open(ParameterIntentModelComponent, {
      size: "lg",
    });
    modal.componentInstance.parameter = _t19;
    modal.componentInstance.serviceId = this.serviceId;
  }

  addNewParameter() {
    const addParameter = this.modalService.open(AddNewParameterComponent, {
      size: "lg",
    }); 
    addParameter.componentInstance.serviceId = this.parameters[0].serviceId;
  }

  refresh() {
    this.fetchParameter();
  }

  fetchParameter(){
    this.service.fetchServiceParameter(this.parameters[0].serviceId)
      .subscribe((response)=>{
        if (response.errorCode != undefined && response.errorCode != 200) {
          this.toast.error('Not able to fetch. please try again in sometime','ERROR');
        }else{
            this.parameters = response.data;
         }
      });
  }


}
