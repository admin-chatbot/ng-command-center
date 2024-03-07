import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

export class LoaderComponent {

  public show: boolean = true;

  constructor() {
    setTimeout(() => {
      this.show = false;  
    }, 3000);
  }

   public showLoder() {
      this.show = true;
   }

   public hide() {
    this.show = false;
   }


}
