import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as data  from '../../../../../shared/data/data/ui-kits/ui-modal';
import { Service } from 'src/app/entity/service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Enums } from 'src/app/enums/enums';
import { Application } from 'src/app/entity/application';

@Component({
  selector: 'app-detail-model', 
  templateUrl: './detail-model.component.html',
  styleUrl: './detail-model.component.scss'
})
export class DetailModelComponent implements OnInit,AfterViewInit {

    
  @Input() title : string;
  @Input() service :Service; 
  @Input() select2Input: [];
 

  public htmlContent = '';
  public activeStep: number = 1;
  public validate: boolean = false;
  public applicationMap = new Map<number,string>;
  public enums = new Enums;
  public responseType: any;
  public requestType: any;
  public submitButton1 = "Edit"; 
  public buttonDissable = false; 

  public myForm = new FormGroup({
    applicationId: new FormControl(0,[Validators.required]), 
    method: new FormControl("",[Validators.required]), 
    endpoint: new FormControl("",[Validators.required]), 
    name: new FormControl("",[Validators.required]), 
    keyword: new FormControl(""), 
    summary: new FormControl("",[Validators.required]), 
    requestSchema: new FormControl(""),     
    responseSchema: new FormControl("",[Validators.required]), 
    botResponseTemplate: new FormControl("",[Validators.required]), 
    requestTypes: new FormControl(new Array,[]), 
    responseTypes: new FormControl(new Array,[]) , 
  });

  constructor(private serviceService:ServiceService,
    private toast:ToastrService,
    private router:Router, 
    private modal : NgbModal){
    this.fetchApplicationList(); 


    this.f['responseTypes'].valueChanges.subscribe(v=>{
      this.responseType = v;
    });

    this.f['requestTypes'].valueChanges.subscribe(v=>{
      this.requestType = v;
    });
  }
  

  get f() { return this.myForm.controls; }
  
  public fetchApplicationList() {
    this.serviceService.fetchApplication()
      .subscribe((response)=>{
        if (response.errorCode != undefined && response.errorCode != 200) { 
          this.toast.error('Not able to onboard. please try again in sometime','ERROR!') ;         
        } else {
           response.data.forEach((element:Application) => {
            if(element.status == 'ACTIVE') {
              this.applicationMap.set(element.id,element.name);
            }
           });
        } 
      })
  }

  addIntend(myForm:FormGroup) {
     alert(this.myForm.value);
  }

   

  ngOnInit(): void { 
  }

  ngAfterViewInit(): void { 
    this.myForm.patchValue({
      applicationId: this.service.applicationId, 
      method: this.service.method, 
      endpoint: this.service.endpoint, 
      name: this.service.name, 
      keyword: this.service.keyword, 
      summary: this.service.summary, 
      requestSchema: this.service.requestSchema ,     
      responseSchema: this.service.responseSchema, 
      botResponseTemplate: this.service.botResponseTemplate, 
      requestTypes: this.service.requestType, 
      responseTypes: this.service.responseType, 
    });
    this.validate = true;

  }

  edit(myForm:FormGroup,event:any) { 
    if( event.submitter.name == "Cancel" ){ 
      //this.router.navigate(['main/service/list']);
    } else {
      this.validate = true;     
      if (this.myForm.valid) {
        const serviceInput: Service = {} as Service;  
        serviceInput.id = this.service.id;   
        serviceInput.clientId = this.service.clientId;
        serviceInput.applicationId  = this.f['applicationId'].value!=null?this.f['applicationId'].value:0 ;
        serviceInput.endpoint =  this.f['endpoint'].value!=null?this.f['endpoint'].value:""; 
        serviceInput.method =  this.f['method'].value!=null?this.f['method'].value:"";   
        serviceInput.name = this.f['name'].value!=null?this.f['name'].value:"";  
        serviceInput.keyword =  this.f['keyword'].value!=null?this.f['keyword'].value:"";
        serviceInput.summary = this.f['summary'].value!=null?this.f['summary'].value:"";
        serviceInput.botResponseTemplate = this.f['botResponseTemplate'].value!=null?this.f['botResponseTemplate'].value:""; 
        serviceInput.responseSchema = this.f['responseSchema'].value!=null?this.f['responseSchema'].value:"";
        serviceInput.requestSchema = this.f['requestSchema'].value!=null?this.f['requestSchema'].value:"";
        serviceInput.status = this.service.status;
        serviceInput.responseType = this.responseType;
        serviceInput.requestType = this.requestType;   

         
        this.submitButton1 = "Loading...";
        this.buttonDissable = true;

        this.serviceService.editService(serviceInput).subscribe((response)=>{
          
          if (response.errorCode != undefined && response.errorCode != 200) {
            this.toast.error( 'Not able to onboard. Please try again later.' ,'ERROR');
          } else {
            this.toast.success(response.message,'success')             
            const service = response.data;   
          }
           
          this.submitButton1 = "Edit";
          this.buttonDissable = false;
        });         
        
      } else {
        this.toast.error( 'Please provide all required values.' ,'ERROR');
      }

    }     
  }
   

  get productTitle() {
    return this.myForm.get('product_Title');
  }

  ngOnDestroy(): void { 
  }

  close(){
    this.modal.dismissAll();
  }

  


}
