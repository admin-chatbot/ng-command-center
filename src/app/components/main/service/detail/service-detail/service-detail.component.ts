import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/entity/service';
import { DetailModelComponent } from '../../view/detail-model/detail-model.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../../service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-service-detail', 
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss'
})
export class ServiceDetailComponent implements OnInit {


  @Input() service:Service;
  public applicationIdNameMap = []; 

  constructor(private modalService: NgbModal,private serviceService:ServiceService,private toast:ToastrService){
   
  }

  ngOnInit(): void {
    this.fetechIdNameMap();
  }


  public edit() {
    const modal = this.modalService.open(DetailModelComponent, {
      size: "lg",
    });
    modal.componentInstance.title = this.service.name
    modal.componentInstance.service = this.service; 
    modal.componentInstance.select2Input = this.applicationIdNameMap;
  }

  fetechIdNameMap(){
    this.serviceService.getGetNames([])
      .subscribe((response)=>{
        if (response.errorCode != undefined && response.errorCode != 200) {
           this.toast.error('Not able to fetch. please try again in sometime','ERROR');
        }else {  
          this.applicationIdNameMap = response.data;               
        }
      });
  }


  fetchServiceById() {
    this.serviceService.fetchServiceById(this.service.id)
      .subscribe((response)=>{
        if (response.errorCode != undefined && response.errorCode != 200) {
          this.toast.error('Not able to fetch. please try again in sometime','ERROR');
       }else {    
                   
       }
      });
  }

  refresh() {
    throw new Error('Method not implemented.');
  }
  

}
