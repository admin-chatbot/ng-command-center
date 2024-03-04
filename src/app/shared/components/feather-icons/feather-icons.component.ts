import { Component, Input } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-feather-icons',
  templateUrl: './feather-icons.component.html',
  styleUrls: ['./feather-icons.component.scss']
})

export class FeatherIconsComponent {

  @Input() icons: string | any;
  @Input() class: string | any;
  @Input() customStyle: string | any;
  @Input() width: any = 20;

 
  ngAfterViewInit() {
    feather.replace();
  }
}
