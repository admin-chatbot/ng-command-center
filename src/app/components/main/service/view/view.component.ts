import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Application } from 'src/app/entity/application';
import { ServiceService } from '../service.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Service } from 'src/app/entity/service';
import { DetailModelComponent } from './detail-model/detail-model.component';

@Component({
  selector: 'app-view', 
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit ,AfterViewInit {



  public active: number = 1;
  public openTab: string = "ACTIVE"; 
  public services: Service[];
  public servicesFilterData: Service[];
  public closeResult: string;
  
  constructor(private service:ServiceService,
    private toast:ToastrService,
    private modalService: NgbModal,    
    private router: Router){

    this.fetchServices(); 
  }


  deleteService(name: string,id: number) {
    throw new Error('Method not implemented.');
  }

  edit(id: number) {
    throw new Error('Method not implemented.');
  }

  search() {
    throw new Error('Method not implemented.');
  }

  detail(id: number) { 
    const selectedService = this.services.filter((data: Service) => {
      return data.id == id ? true : false;
    });
    this.router.navigate(['main/service/detail']);
    /*
    const modal = this.modalService.open(DetailModelComponent, {
        size: "lg",
    });
    modal.componentInstance.title = selectedService[0].name
    modal.componentInstance.service = selectedService[0];
    */
  }

  tabbed(val: string) {
    this.openTab = val;
    this.servicesFilterData = val !== 'All' ? this.services.filter((data: Service) => {
      return data.status == this.openTab ? true : false;
    }) : this.services;
  } 
  
  public fetchServices(){
    this.service.fetchService()
      .subscribe((response)=>{
        if (response.errorCode != undefined && response.errorCode != 200) {
          this.toast.error('Not able to fetch. please try again in sometime','ERROR');
        }else{  
          this.services =  response.data; 
          this.servicesFilterData  = this.services.filter((data:Service) => {
            return data.status ==  'ACTIVE'? true:false;         
          });
        }
      });

  }

  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

}
