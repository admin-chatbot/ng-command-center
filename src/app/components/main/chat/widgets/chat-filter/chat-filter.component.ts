import { Component } from "@angular/core";
import * as data from "../../../../../shared/data/data/chat/chat";

@Component({
  selector: "app-chat-filter",
  templateUrl: "./chat-filter.component.html",
  styleUrls: ["./chat-filter.component.scss"],
})

export class ChatFilterComponent {

  public openTab: string = "chats";
  public chat = data.chat;
  public Contacts = data.Contacts;
  public isShow: boolean = false;
  public openId: number;

  tabbed(val: string) {
    this.openTab = val;
  }

  open(id: number, item: data.contects) {
    this.Contacts.forEach((data) => {
      if (data.id = item.id) {
        data.item.forEach((element) => {
          if (element.id == id) {
            this.openId = this.openId !== data.id ? data.id : 0;
          }
        });
      }
    });
  }
  
}
