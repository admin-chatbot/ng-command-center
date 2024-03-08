import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationSearch } from 'src/app/entity/applicationSearch';
import { Enums } from 'src/app/enums/enums';

@Component({
  selector: 'app-project-search', 
  templateUrl: './project-search.component.html',
  styleUrl: './project-search.component.scss'
})
export class ProjectSearchComponent {
  

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
