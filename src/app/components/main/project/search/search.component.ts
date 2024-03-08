import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from 'src/app/entity/application';
import { SearchRequest } from 'src/app/entity/searchRequest';
import { ApplicationService } from '../application.service';
import { ToastrService } from 'ngx-toastr';
import { ApplicationSearch } from 'src/app/entity/applicationSearch';

@Component({
  selector: 'app-search', 
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {


 
  public applications: Application[];
  public applicationFilterData: Application[];
  public closeResult: string;
  public searchRequest : ApplicationSearch;
  public searchMap = new Map();
  public clientId:any;

  constructor(private router: Router,private applicationService:ApplicationService,private toast:ToastrService, ){
    this.clientId = localStorage.getItem('id');
    const navigation = this.router.getCurrentNavigation(); 

    if(navigation!=null) {   
      const state = navigation.extras.state ;
      const searchRequest =  navigation?.extras.state?.['data'];         
      if(searchRequest==undefined || searchRequest ==null) {
        this.router.navigate(['main/project/list']);
      }   
      
      this.searchRequest = searchRequest;
      console.log(JSON.stringify( this.searchRequest))
      this.searchMap = new Map(Object.entries( this.searchRequest));
      
      
    } else {
      this.router.navigate(['main/project/list']);
    }
    this.search();
  }


  search() {
    this.searchRequest.clientId = this.clientId;
    console.log(JSON.stringify(this.searchRequest));
    this.applicationService.search(this.searchRequest)
          .subscribe(res=>{
            console.log(JSON.stringify(res));
            if (res.code != undefined && res.code != 200) { 
              //this.notifier.notify('error','Not able to onboard. please try again in sometime');         
            } else { 
              this.applicationFilterData = res.data;   
            }           
          });
  }


  tabbed(arg0: string) {
    //throw new Error('Method not implemented.');
  }

  clear(field: string) {
    if(this.searchMap.has(field)) {
      this.searchMap.delete(field);
    }

    if(this.searchMap.size == 0) {
      this.clearAll();
    }

    this.searchRequest = Object.fromEntries(this.searchMap); 
    this.search();

  }

  clearAll() {
    this.searchMap.clear();
    this.searchRequest = {} as ApplicationSearch;
    this.router.navigate(['main/project/list']);  
  }

 
    

}
