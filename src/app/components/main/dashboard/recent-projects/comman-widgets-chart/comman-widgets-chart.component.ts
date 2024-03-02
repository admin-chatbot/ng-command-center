import { Component, Input } from '@angular/core';
import { ChartOptions } from '../../../../../shared/data/chart/general/apex-chart';

@Component({
  selector: 'app-comman-widgets-chart',
  templateUrl: './comman-widgets-chart.component.html',
  styleUrls: ['./comman-widgets-chart.component.scss']
})

export class CommanWidgetsChartComponent {

  @Input() item: ChartOptions |any;

}
