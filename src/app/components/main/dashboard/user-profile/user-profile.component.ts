import { Component, Input } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/project";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})

export class UserProfileComponent {

  public isShow: boolean = false;
  @Input() item: data.userProfileData[];

  clickOutside(): void {
    this.isShow = false;
  }
}
