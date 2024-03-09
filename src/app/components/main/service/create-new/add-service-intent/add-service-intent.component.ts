import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-service-intent', 
  templateUrl: './add-service-intent.component.html',
  styleUrl: './add-service-intent.component.scss'
})
export class AddServiceIntentComponent {

  public htmlContent = '';
  public activeStep: number = 2;
  public validate: boolean = false;

  @Output() activeSteps = new EventEmitter<number>();

 
  public html = '';

  ngOnInit(): void { 
  }

  myForm = new FormGroup({
    product_Title: new FormControl("",Validators.required),

  })

  next(myForm:FormGroup) {
    this.validate = true;
    if (this.myForm.valid) {}

      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    
  }

  get productTitle() {
    return this.myForm.get('product_Title');
  }

  ngOnDestroy(): void { 
  }

}
