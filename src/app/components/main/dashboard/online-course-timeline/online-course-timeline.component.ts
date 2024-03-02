import { Component } from "@angular/core";
import { NgbCalendar, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-online-course-timeline",
  templateUrl: "./online-course-timeline.component.html",
  styleUrls: ["./online-course-timeline.component.scss"],
})

export class OnlineCourseTimelineComponent {
	
  public isShow: boolean = false;

  clickOutside(): void {
    this.isShow = false;
  }

}
