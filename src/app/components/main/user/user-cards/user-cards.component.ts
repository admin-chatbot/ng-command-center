import { AfterViewInit,  OnInit } from '@angular/core';
import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/user/user'
import { User } from 'src/app/entity/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss']
})

export class UserCardsComponent implements OnInit ,AfterViewInit {


  public openTab: string = "ACTIVE";
  public userLists = data.userCards;
  private userService:UserService;
  
   public userCards = data.userCards;
   
   public userFilterData: User[];
  users: User[];
  toast: any;




  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.getUsers();
  }



  private getUsers(){
    this.userService.fetchUser()
      .subscribe(res=>{      
        if (res.errorCode != undefined && res.errorCode != 200) {
          this.toast.error('Not able to onboard. please try again in sometime','ERROR');
        }else{  
          this.users =  res.data; 
          this.userFilterData  = this.users.filter((data:User) => {
            return data.status ==  'ACTIVE'? true:false;
         });
        }
      });
  }

 
  

   public tabbed(val: string) {
    this.openTab = val;
    this.userFilterData = val !== 'All' ? this.users.filter((data: User) => {
      return data.status == this.openTab ? true : false;
    }) : this.users;
  }

}


