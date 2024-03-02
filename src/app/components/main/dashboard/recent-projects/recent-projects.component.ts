import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/project';

@Component({
  selector: 'app-recent-projects',
  templateUrl: './recent-projects.component.html',
  styleUrls: ['./recent-projects.component.scss']
})

export class RecentProjectsComponent {

  public openId : number;
  public isCalender : boolean = false;
  public tableData = data.tableData;
  
  openMenu(id : number){
    this.tableData.filter((data) => {
      if(data.id === id){
        this.openId = this.openId !== data.id ? data.id : 0;
      }
    })
  }

  clickOutside(): void {
    this.isCalender = false;
  }
}
