import { Component, Input } from '@angular/core';
import { articlesAndVideos } from '../../../../shared/data/data/faq/faq';

@Component({
  selector: 'app-latest-articles-videos',
  templateUrl: './latest-articles-videos.component.html',
  styleUrls: ['./latest-articles-videos.component.scss']
})

export class LatestArticlesVideosComponent {

  @Input() data: articlesAndVideos[];

}
