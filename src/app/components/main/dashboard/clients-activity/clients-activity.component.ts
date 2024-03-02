import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/project";

@Component({
  selector: "app-clients-activity",
  templateUrl: "./clients-activity.component.html",
  styleUrls: ["./clients-activity.component.scss"],
})

export class ClientsActivityComponent {
  
  public isShow: boolean = false;
  public openId: number;
  public isOpen: boolean = false;

  public ClientActivity = data.ClientActivity;

  open(id: number) {
    this.ClientActivity.filter((datas) => {
      if (datas.id == id) {
        this.openId = this.openId !== datas.id ? datas.id : 0;
      }
    });
  }
  
  clickOutside(): void {
    this.isShow = false;
  }
}
