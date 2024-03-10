import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Enums } from 'src/app/enums/enums';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.scss'
})
export class UserSearchComponent {

  public validate: boolean = false;
  public enums = new Enums; 
  @Input() public search: any ;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(private modal: NgbActiveModal) {      
  }

  close() {     
    this.passEntry.emit(this.search);
    this.modal.close(this.search);
  }
}
