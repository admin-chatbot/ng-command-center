import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Service } from 'src/app/entity/service';
import { ToastrService } from 'ngx-toastr';
import { ServiceIntend } from '../serviceIntend';
import { ServiceParameter } from 'src/app/entity/serviceParameters';

@Component({
  selector: 'app-detail', 
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  public listView: boolean = false;
  public openSidebar: boolean = false;
  public isShow: Boolean = false;
  public serviceDetail:Service;
  public serviceId:number;
  public intents:ServiceIntend[];
  public parameter:ServiceParameter[];


  constructor(private service:ServiceService, private toast:ToastrService,private router: Router){
    const navigation = this.router.getCurrentNavigation(); 
    if(navigation!=null) {   
      const state = navigation.extras.state ;
      this.serviceDetail = navigation?.extras.state?.['data']; 

      if(this.serviceDetail==undefined || this.serviceDetail ==null) {
        this.router.navigate(['main/service/list']);
      } 

      this.serviceId = this.serviceDetail.id; 
      this.fetchIntend();
      this.fetchParameter();
    }else{
      this.router.navigate(['main/service/list']);
    }
    
  }


  fetchIntend(){
    this.service.fetchIntendsByService(this.serviceId)
      .subscribe((response)=>{
        if (response.errorCode != undefined && response.errorCode != 200) {
          this.toast.error('Not able to fetch. please try again in sometime','ERROR');
        }else{
            this.intents = response.data;
         }
      });
  }


  fetchParameter(){
    this.service.fetchServiceParameter(this.serviceId)
      .subscribe((response)=>{
        if (response.errorCode != undefined && response.errorCode != 200) {
          this.toast.error('Not able to fetch. please try again in sometime','ERROR');
        }else{
            this.parameter = response.data;
         }
      });
  }


}
