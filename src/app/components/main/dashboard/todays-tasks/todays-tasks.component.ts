import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/project";

@Component({
  selector: "app-todays-tasks",
  templateUrl: "./todays-tasks.component.html",
  styleUrls: ["./todays-tasks.component.scss"],
})

export class TodaysTasksComponent {

  public isShow: boolean = false;
  public openId: number;
  public todaysTask = data.todaysTask;

  opne(id: number) {
    this.todaysTask.filter((data) => {
      if (data.id == id) {
        this.openId = this.openId !== data.id ? data.id : 0;
      }
    });
  }

  clickOutside(): void {
    this.isShow = false;
  }
}
