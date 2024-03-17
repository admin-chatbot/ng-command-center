import { DecimalPipe } from "@angular/common";
import { Component, QueryList, ViewChildren } from "@angular/core";
import { Observable } from "rxjs";
import { Table } from "../../../../shared/data/data/table/data-table";
import { BasicDataTableDirective, SortEvent } from "src/app/shared/directives/basic-data-table.directive";
import { BasicdatatableService } from "src/app/shared/services/basicdatatable.service";
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
  public basicDataTable$: Observable<Table[]>;
  public total$: Observable<number>;
  public basicData : Table[];
  public services:Service[] = [];
  public applicationId:number;
  public checkBoxList:AutoDiscoverServiceEntity[]= [];
 
  @ViewChildren(BasicDataTableDirective)
  public headers: QueryList<BasicDataTableDirective>;

  constructor(public service: BasicdatatableService,private autoDiscover:AutoDiscoverService,private router: Router) {
    this.basicDataTable$ = service.basicDataTable$;
    this.total$ = service.total$;

    const navigation = this.router.getCurrentNavigation(); 
    if(navigation!=null) {   
      const state = navigation.extras.state ;
     
      this.applicationId = navigation?.extras.state?.['id']; 

      alert(JSON.stringify(state))

      if(this.applicationId==undefined || this.applicationId ==null) {
        this.router.navigate(['main/project/list']);
      } 

      this.discover();
    }else{
      this.router.navigate(['main/project/list']);
    }
  }

  ngOnInit() {
    this.service.basicDataTable$.subscribe((data) => {
      if (data) {
         this.basicData = data;
      }
    });
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
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

}
