import { Component, Input } from '@angular/core'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceParameter } from 'src/app/entity/serviceParameters';
import { ServiceService } from '../../service.service';
import { EditIntentModelComponent } from '../edit-intent-model/edit-intent-model.component';
import { ParameterIntentModelComponent } from '../parameter-intent-model/parameter-intent-model.component';

@Component({
  selector: 'app-parameter', 
  templateUrl: './parameter.component.html',
  styleUrl: './parameter.component.scss'
})
export class ParameterComponent {

  public openTab: string = "febric"; 
  @Input() parameters: ServiceParameter[];

  constructor(private modalService: NgbModal){
   
  }

  public tabbed(val: string) {
    this.openTab = val;
  }

  openEditModel(_t19: ServiceParameter) {
    const modal = this.modalService.open(ParameterIntentModelComponent, {
      size: "lg",
    });
    modal.componentInstance.parameter = _t19;
  }

}
