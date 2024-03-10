import { Component } from '@angular/core';

@Component({
  selector: 'app-detail', 
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  public listView: boolean = false;
  public openSidebar: boolean = false;
  public isShow: Boolean = false;

}
