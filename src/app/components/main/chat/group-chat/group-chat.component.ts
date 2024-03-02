import { Component } from '@angular/core';

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.scss']
})

export class GroupChatComponent {

  public isShow : boolean = false;


  public imageData = [
     {
       image: 'assets/images/avtar/16.jpg'
     } ,
     {
      image: 'assets/images/avtar/4.jpg'
    } ,
    {
      image: 'assets/images/avtar/7.jpg'
    } ,
    {
      image: 'assets/images/avtar/11.jpg'
    } ,
    {
      image: 'assets/images/avtar/4.jpg'
    } ,
    {
      image: 'assets/images/blog/comment.jpg'
    } ,
    {
      image: 'assets/images/avtar/7.jpg'
    } ,
  ]

}
