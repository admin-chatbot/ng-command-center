import { Component } from '@angular/core';
import { articlesAndVideosData, commanTopData } from '../../../shared/data/data/faq/faq';
import { featuredTutorialData } from '../../../shared/data/data/faq/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})

export class FaqComponent {

  public commanData  = commanTopData;
  public featuredTutorialData =  featuredTutorialData;
  public articlesAndVideosData = articlesAndVideosData;
}
