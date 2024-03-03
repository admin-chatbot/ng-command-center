import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/user/user'
@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss']
})

export class UserCardsComponent {

   public userCards = data.userCards;

}
