import { AfterViewInit, Component, OnInit, TemplateRef } from '@angular/core';
import * as data from '../../../../shared/data/data/project/project';
import { project } from '../../../../shared/data/data/project/project';
import { Application } from 'src/app/entity/application';
import { ApplicationService } from '../application.service';
import { ToastrService } from 'ngx-toastr';
import { ProjectSearchComponent } from './project-search/project-search.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ApplicationSearch } from 'src/app/entity/applicationSearch';
import { DeleteConfirmModelComponent } from 'src/app/shared/components/delete-confirm-model/delete-confirm-model.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})

export class ProjectListComponent implements OnInit ,AfterViewInit{

  
  public active: number = 1;
  public openTab: string = "ACTIVE";
  public ProjectLists = data.ProjectList;
  public filterData: project[] = this.ProjectLists;

  public applications: Application[];
  public applicationFilterData: Application[];
  public closeResult: string;
  
  constructor(private applicationService:ApplicationService,
    private toast:ToastrService,
    private modalService: NgbModal,    
    private router: Router,){
    this.fetchApplication(); 
  }
  ngAfterViewInit(): void {
     //this.applicationFilterData = val !== 'ACTIVE'
  }
  
  ngOnInit(): void {    
     
  }

  search(){
    const modalRef = this.modalService.open(ProjectSearchComponent);
    let search = { } as ApplicationSearch;
    search.name = "Jitendra";
    modalRef.componentInstance.search = search;
    modalRef.result.then((result) => {
      //console.log("Hello "+result);
    }, (reason) => {
      console.log("Hi ."+JSON.stringify( reason));
    });
  }

  edit(id:number) {  
   this.router.navigate(['main/project/edit'],{ state: { appId: id } });   
  }
  

  private fetchApplication(){
    this.applicationService.fetchApplication()
      .subscribe(res=>{      
        if (res.errorCode != undefined && res.errorCode != 200) {
          this.toast.error('Not able to fetch. please try again in sometime','ERROR');
        }else{  
          this.applications =  res.data; 
          this.applicationFilterData  = this.applications.filter((data:Application) => {
            return data.status ==  'ACTIVE'? true:false;
         });
        }
      });
  }

  public tabbed(val: string) {
    this.openTab = val;
    this.applicationFilterData = val !== 'All' ? this.applications.filter((data: Application) => {
      return data.status == this.openTab ? true : false;
    }) : this.applications;
  } 

  

  centeredModal(content: any) {
    const deleteModalRef = this.modalService.open(DeleteConfirmModelComponent,{backdrop:false});
    deleteModalRef.componentInstance.contents = "Do you really want to DELETE '"+content+"' Application.";
    deleteModalRef.result.then((result) => {
      console.log(result)
    }, (reason) => {
        console.log(reason)
       if(reason=='ok') {
        this.toast.success("Deleted!","Confirmation")
       }
    });
  }  
    

}
