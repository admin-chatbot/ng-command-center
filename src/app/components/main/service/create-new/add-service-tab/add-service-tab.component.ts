import { Component, Input } from '@angular/core';
import { AddService } from '../addService';

@Component({
  selector: 'app-add-service-tab', 
  templateUrl: './add-service-tab.component.html',
  styleUrl: './add-service-tab.component.scss'
})
export class AddServiceTabComponent {

  @Input()  data : AddService[];
  @Input() activeSteps!: number;

}
