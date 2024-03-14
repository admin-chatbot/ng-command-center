
import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { ToastrService } from 'ngx-toastr';
import { ApplicationSearch } from 'src/app/entity/applicationSearch';
import { SharedModule } from "../../../../shared/shared.module";
import { User } from 'src/app/entity/user';
import { UserSearch } from 'src/app/entity/userSearch';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search', 
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'

})
export class SearchComponent {


 
  public users: User[];
  public userFilterData: User[];
  public closeResult: string;
  public searchRequest : UserSearch;
  public searchMap = new Map();
  public clientId:any;
  
  constructor(private router: Router,private userService:UserService,private toast:ToastrService, ){
    this.clientId = localStorage.getItem('id');
    const navigation = this.router.getCurrentNavigation(); 

    if(navigation!=null) {   
      const state = navigation.extras.state ;
      const searchRequest =  navigation?.extras.state?.['data'];         
      if(searchRequest==undefined || searchRequest ==null) {
        this.router.navigate(['main/user/list']);
      }   
      
      this.searchRequest = searchRequest;
      console.log(JSON.stringify( this.searchRequest))
      this.searchMap = new Map(Object.entries( this.searchRequest));
      
      
    } else {
      this.router.navigate(['main/user/list']);
    }
    this.search();
  }


  search() {
    //this.searchRequest= this.clientId;
    console.log(JSON.stringify(this.searchRequest));
    this.userService.search(this.searchRequest)
    .subscribe(res=>{
            console.log(JSON.stringify(res));
            if (res.code != undefined && res.code != 200) { 
              //this.notifier.notify('error','Not able to onboard. please try again in sometime');         
            } else { 
              this.userFilterData = res.data;   
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
    this.searchRequest = {} as UserSearch;
    this.router.navigate(['main/user/list']);  
  }

 
    

}
