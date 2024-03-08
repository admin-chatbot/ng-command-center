import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-confirm-model', 
  templateUrl: './delete-confirm-model.component.html',
  styleUrl: './delete-confirm-model.component.scss'
})
export class DeleteConfirmModelComponent {

  @Input() public contents: any ;
  constructor(private modal: NgbModal) {      
  }

  close(res:any) {         
    this.modal.dismissAll(res)
  }
}
