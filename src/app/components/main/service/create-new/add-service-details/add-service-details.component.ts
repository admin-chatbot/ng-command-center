import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../service.service';
import { ToastrService } from 'ngx-toastr';
import { Application } from 'src/app/entity/application';
import { Enums } from 'src/app/enums/enums';
import { Service } from 'src/app/entity/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service-details', 
  templateUrl: './add-service-details.component.html',
  styleUrl: './add-service-details.component.scss'
})
export class AddServiceDetailsComponent implements OnInit,AfterViewInit{
 
  

  public htmlContent = '';
  public activeStep: number = 1;
  public validate: boolean = false;
  public applicationMap = new Map<number,string>;
  public enums = new Enums;
  public responseType: any;
  public requestType: any;
  public submitButton1 = "Submit And Finish";
  public submitButton2 = "Submit And Next";
  public buttonDissable = false;

  @Output() activeSteps = new EventEmitter<number>();  
  public html = '';

  public myForm = new FormGroup({
    applicationName: new FormControl("",[Validators.required]), 
    method: new FormControl("",[Validators.required]), 
    endpoint: new FormControl("",[Validators.required]), 
    name: new FormControl("",[Validators.required]), 
    keyword: new FormControl(""), 
    summary: new FormControl("",[Validators.required]), 
    requestSchema: new FormControl(""),     
    responseSchema: new FormControl("",[Validators.required]), 
    botResponseTemplate: new FormControl("",[Validators.required]), 
    requestTypes: new FormControl(""), 
    responseTypes: new FormControl(""), 
  });

  constructor(private serviceService:ServiceService,private toast:ToastrService,private router:Router){
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
  }

  next(myForm:FormGroup,event:any) { 
    if( event.submitter.name == "Cancel" ){ 
      //this.router.navigate(['main/service/list']);
    } else {
      this.validate = true;     
      if (this.myForm.valid) {
        const service: Service = {} as Service;  
        service.id = 0;   
        service.clientId = 0;
        service.applicationId  = Number.parseInt( this.f['applicationName'].value!=null?this.f['applicationName'].value:"0" );
        service.endpoint =  this.f['endpoint'].value!=null?this.f['endpoint'].value:""; 
        service.method =  this.f['method'].value!=null?this.f['method'].value:"";   
        service.name = this.f['name'].value!=null?this.f['name'].value:"";  
        service.keyword =  this.f['keyword'].value!=null?this.f['keyword'].value:"";
        service.summary = this.f['summary'].value!=null?this.f['summary'].value:"";
        service.botResponseTemplate = this.f['botResponseTemplate'].value!=null?this.f['botResponseTemplate'].value:"";
        service.status = "NEW";
        service.responseSchema = this.f['responseSchema'].value!=null?this.f['responseSchema'].value:"";
        service.requestSchema = this.f['requestSchema'].value!=null?this.f['requestSchema'].value:"";
        service.responseType = this.responseType;
        service.requestType = this.requestType;   

        this.submitButton2 = "Loading...";
        this.submitButton1 = "Loading...";
        this.buttonDissable = true;

        this.serviceService.onBoard(service).subscribe((response)=>{
          
          if (response.errorCode != undefined && response.errorCode != 200) {
            this.toast.error( 'Not able to onboard. Please try again later.' ,'ERROR');
          } else {
            this.toast.success(response.message,'success')

            if( event.submitter.name == "Finish" ){ 
              this.router.navigate(['main/service/list']);
            }else {
              const service = response.data; 
              localStorage.setItem('sId',service.id);    
              const number = this.activeStep + 1;
              this.activeSteps.emit(number);
            }  
          }
          this.submitButton2 = "Submit And Next";
          this.submitButton1 = "Submit And Finish";
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

  
}