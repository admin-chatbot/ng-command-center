import { Component, Input } from '@angular/core';
import { commanData } from '../../../../shared/data/data/faq/faq';

@Component({
  selector: 'app-comman-data',
  templateUrl: './comman-data.component.html',
  styleUrls: ['./comman-data.component.scss']
})

export class CommanDataComponent {

  @Input() data : commanData[];

}
