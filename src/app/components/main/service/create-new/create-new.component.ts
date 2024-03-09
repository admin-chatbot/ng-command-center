import { Component } from '@angular/core';
import { addProductTabData } from './addService';
 

@Component({
  selector: 'app-create-new', 
  templateUrl: './create-new.component.html',
  styleUrl: './create-new.component.scss'
})
export class CreateNewComponent {

  public validate = false;
  public addProductTabData = addProductTabData;
  public activeSteps!: number;
  

  ngOnInit() {
    const data = addProductTabData.filter((data) => {
      return data.steps === 1;
    });

    this.activeSteps = data[0].steps;
  }

  receiveChildData(step: number) {
    this.activeSteps = step;
  }

 

}
