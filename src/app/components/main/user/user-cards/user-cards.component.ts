import { AfterViewInit,  OnInit } from '@angular/core';
import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/user/user'
import { User } from 'src/app/entity/user';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';  // Import ToastrService if not already imported
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserSearch } from 'src/app/entity/userSearch';

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
  

  constructor(private userService: UserService,  private modalService: NgbModal, private toast: ToastrService) {}

  ngAfterViewInit(): void {
   
  }
 
  ngOnInit(): void {
    this.getUsers();
  }

  search(){
    const modalRef = this.modalService.open(UserSearchComponent);
    let search = { } as UserSearch;
    search.name = "Jitendra";
    modalRef.componentInstance.search = search;
    modalRef.result.then((result) => {
      //console.log("Hello "+result);
    }, (reason) => {
      console.log("Hi ."+JSON.stringify( reason));
    });
  }

  private getUsers() {
   
    this.userService.fetchUser()
      .subscribe(res => {      
        if (res.errorCode !== undefined && res.errorCode !== 200) {
      
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


