import { Component } from '@angular/core';

@Component({
  selector: 'app-running-events',
  templateUrl: './running-events.component.html',
  styleUrls: ['./running-events.component.scss']
})

export class RunningEventsComponent {
   
  public isShow : boolean = false;

  clickOutside(): void {
    this.isShow = false;
  }
   
}
