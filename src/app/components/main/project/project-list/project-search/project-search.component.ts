import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-search', 
  templateUrl: './project-search.component.html',
  styleUrl: './project-search.component.scss'
})
export class ProjectSearchComponent {
  constructor(private modal: NgbModal) { }

  public validate: boolean = false;

  public submit() {
    this.validate = !this.validate;

  }
}
