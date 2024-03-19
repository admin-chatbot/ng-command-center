import { DecimalPipe } from "@angular/common";
import { Component, QueryList, ViewChildren } from "@angular/core";
import { Observable } from "rxjs"; 
import { BasicDataTableDirective, SortEvent } from "src/app/shared/directives/basic-data-table.directive";
import { BasicdatatableService, Table } from "src/app/shared/services/basicdatatable.service";
import { Service } from "src/app/entity/service";
import { AutoDiscoverService } from "./auto-discover.service";
import { AutoDiscoverServiceEntity } from "src/app/entity/autoDiscoverList";
import { Router } from "@angular/router";
 
 
 

@Component({
  selector: 'app-discover-service', 
  templateUrl: './discover-service.component.html',
  styleUrl: './discover-service.component.scss'
})
export class DiscoverServiceComponent {
 public isShow: boolean = false; 
  public services:Service[] = [];
  public applicationId:number;
  public checkBoxList:AutoDiscoverServiceEntity[]= [];
  public selectAll:boolean = false;
 
  @ViewChildren(BasicDataTableDirective)
  public headers: QueryList<BasicDataTableDirective>;

  constructor(public service: BasicdatatableService,private autoDiscover:AutoDiscoverService,private router: Router) {
     

    const navigation = this.router.getCurrentNavigation(); 
    if(navigation!=null) {   
      const state = navigation.extras.state ;
     
      this.applicationId = navigation?.extras.state?.['id'];        

      if(this.applicationId==undefined || this.applicationId ==null) {
        this.router.navigate(['main/project/list']);
      } 

      this.discover();
    }else{
      this.router.navigate(['main/project/list']);
    }
  }

  ngOnInit() {
    
  }

   

  discover() {
    this.autoDiscover.discoverService(this.applicationId)
      .subscribe(res=>{
        if (res.errorCode != undefined && res.errorCode != 200) { 

        } else {
            this.services = res;
            this.services.forEach(element => {
              this.checkBoxList.push({'id':element.id,'service':element,'checked':false});
            });
        }
      });
  }

  onChange(service: Service) {  
    var index = this.services.findIndex((obj)=>{
      return (obj.endpoint === service.endpoint 
        && obj.name === service.name
        && obj.method === service.method)
    })  
    this.checkBoxList[index].checked = !this.checkBoxList[index].checked;     
  } 

  toggle() {
    this.checkBoxList.forEach((e)=>e.checked=!this.selectAll);
    this.selectAll = !this.selectAll;
  }

  show(arg0: Service) {
    alert(JSON.stringify(arg0))
  }
     

}
