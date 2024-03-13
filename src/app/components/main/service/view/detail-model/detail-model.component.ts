import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as data  from '../../../../../shared/data/data/ui-kits/ui-modal';
import { Service } from 'src/app/entity/service';

@Component({
  selector: 'app-detail-model', 
  templateUrl: './detail-model.component.html',
  styleUrl: './detail-model.component.scss'
})
export class DetailModelComponent implements OnInit,AfterViewInit {

    
  @Input() title : string;
  @Input() service :Service; 
  @Input() select2Input: [];
  public commonFullScreenData = data.commonFullScreenSizeData;
  public applicationName: any;

  constructor(private modal : NgbModal){}

  ngAfterViewInit(): void {
    this.setName();
  }

  ngOnInit(): void {
     
  }

  close(){
    this.modal.dismissAll();
  }

  setName(): any {
    this.select2Input.forEach(e=>{
      const obj = JSON.parse(JSON.stringify(e));
      if(obj.id === this.service.applicationId) {
        this.applicationName = obj.name;
        return;
      }
    })
  }

}
