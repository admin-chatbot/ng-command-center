import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/table/bootstrap-table';

@Component({
  selector: 'app-parameter', 
  templateUrl: './parameter.component.html',
  styleUrl: './parameter.component.scss'
})
export class ParameterComponent {
  public openTab: string = "febric";
  public responsiveTablesBackground = data.responsiveTablesBackground;

  public tabbed(val: string) {
    this.openTab = val;
  }

}
