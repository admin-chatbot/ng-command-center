import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/general/apex-chart';

@Component({
  selector: 'app-total-project',
  templateUrl: './total-project.component.html',
  styleUrls: ['./total-project.component.scss']
})

export class TotalProjectComponent {

   public isShow:boolean = false;
   public totalProject =  data.totalProject;

   clickOutside(): void {
    this.isShow = false;
  }
   
}
