import { Component } from '@angular/core';
 
  
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})


export class BrandComponent {
  public isShow: boolean = false;
  public recentCustomers: any;

  clickOutside(): void {
    this.isShow = false;
  }
}
