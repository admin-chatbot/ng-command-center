import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/general/apex-chart';


@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.scss']
})

export class ProjectsOverviewComponent {

  public isShow : boolean = false;
  public orderOverview = data.orderOverview;
  public ordeRbar = data.ordeRbar;

  clickOutside(): void {
    this.isShow = false;
  }
  
}
