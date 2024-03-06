import { AfterViewInit,  OnInit } from '@angular/core';
import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/user/user'
import { User } from 'src/app/entity/user';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';  // Import ToastrService if not already imported

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss']
})

export class UserCardsComponent implements OnInit ,AfterViewInit {


  public openTab: string = "ACTIVE";
  public userLists = data.userCards;
  public userCards = data.userCards;
  public userFilterData: User[];
  public users: User[];


  constructor(private userService: UserService, private toast: ToastrService) {}

  ngAfterViewInit(): void {
   
  }
 
  ngOnInit(): void {
    this.getUsers();
  }



  private getUsers() {
    alert('Fetching users...');
    this.userService.fetchUser()
      .subscribe(res => {      
        if (res.errorCode !== undefined && res.errorCode !== 200) {
          alert('Error response from fetchUser:');
          this.toast.error('Not able to onboard. Please try again in sometime', 'ERROR');
        } else {  
          this.users = res.data; 
          this.userFilterData = this.users.filter((data: User) => {
            return data.status === 'ACTIVE';
          });
        }
      });
  }

 
  
  public tabbed(val: string) {
    this.openTab = val;
    this.userFilterData = val !== 'All' ? this.users.filter((data: User) => {
      return data.status === this.openTab;
    }) : this.users;
  }
}


