import { Component } from '@angular/core';
import * as data from "../../../../../shared/data/dashboard/ecommerce";
  
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})


export class BrandComponent {
  public isShow: boolean = false;
  public recentCustomers = data.recentCustomers;

  clickOutside(): void {
    this.isShow = false;
  }
}
