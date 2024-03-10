import { Component } from '@angular/core';

@Component({
  selector: 'app-intent', 
  templateUrl: './intent.component.html',
  styleUrl: './intent.component.scss'
})
export class IntentComponent {
  public isShow: boolean = false;
  public recentCustomers: any;

  clickOutside(): void {
    this.isShow = false;
  }
}
