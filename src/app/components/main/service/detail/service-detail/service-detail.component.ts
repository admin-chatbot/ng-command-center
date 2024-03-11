import { Component, Input } from '@angular/core';
import { Service } from 'src/app/entity/service';

@Component({
  selector: 'app-service-detail', 
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss'
})
export class ServiceDetailComponent {

  @Input() service:Service;

}
