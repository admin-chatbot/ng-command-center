import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendar-dashboard',
  templateUrl: './calendar-dashboard.component.html',
  styleUrls: ['./calendar-dashboard.component.scss']
})

export class CalendarDashboardComponent {

  public model: NgbDateStruct;
  public date: { year: number; month: number };

}
