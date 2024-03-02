import { Component } from '@angular/core';
import * as data from '../.././../../../shared/data/data/chat/chat';
@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})

export class ChatBoxComponent {

  public chatData = data.massage;
  public isShow : boolean = false;
  public showEmojiPicker:boolean = false;

}
