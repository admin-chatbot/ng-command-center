import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as data  from '../../../../../shared/data/data/ui-kits/ui-modal';
import { Service } from 'src/app/entity/service';

@Component({
  selector: 'app-detail-model', 
  templateUrl: './detail-model.component.html',
  styleUrl: './detail-model.component.scss'
})
export class DetailModelComponent {
    
  @Input() title : string;
  @Input() service :Service;
  public commonFullScreenData = data.commonFullScreenSizeData;
  constructor(private modal : NgbModal){}

  close(){
    this.modal.dismissAll();
  }

}
