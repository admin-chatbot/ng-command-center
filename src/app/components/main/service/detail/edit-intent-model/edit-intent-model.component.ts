import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceIntend } from '../../serviceIntend';

@Component({
  selector: 'app-edit-intent-model', 
  templateUrl: './edit-intent-model.component.html',
  styleUrl: './edit-intent-model.component.scss'
})
export class EditIntentModelComponent {

  @Input() intent:ServiceIntend;

  constructor(private modal : NgbModal){}


  close(){
    this.modal.dismissAll();
  }

}
