import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Enums } from 'src/app/enums/enums';

@Component({
  selector: 'app-add-service-parameter', 
  templateUrl: './add-service-parameter.component.html',
  styleUrl: './add-service-parameter.component.scss'
})
export class AddServiceParameterComponent {
  public htmlContent = '';
  public activeStep: number = 1;
  public validate: boolean = false;
  public enums = new Enums;

  @Output() activeSteps = new EventEmitter<number>();

 
  public html = '';

  ngOnInit(): void { 
  }

  myForm = new FormGroup({
    product_Title: new FormControl("",Validators.required),

  })

  next(myForm:FormGroup) {
    this.validate = true;
    if (this.myForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  get productTitle() {
    return this.myForm.get('product_Title');
  }

  ngOnDestroy(): void { 
  }
}
