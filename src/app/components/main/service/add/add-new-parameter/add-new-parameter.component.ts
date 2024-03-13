import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceParameter } from 'src/app/entity/serviceParameters';
import { Enums } from 'src/app/enums/enums';
import { ServiceParameterService } from '../../service-parameter.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-new-parameter', 
  templateUrl: './add-new-parameter.component.html',
  styleUrl: './add-new-parameter.component.scss'
})
export class AddNewParameterComponent {
  

  public htmlContent = '';
  public activeStep: number = 1;
  public validate: boolean = false;
  public enums = new Enums;
  public submitButton1 = "Add";
  public submitButton2 = "Finish";
  public buttonDissable = false;
  public html = '';
  public active: boolean;
  public item = true;
  public serviceId: any = 0;

  @Input() parameter: ServiceParameter;


  myForm = new FormGroup({ 
    id: new FormControl("0",Validators.required),
    serviceId: new FormControl("0",Validators.required),
    name: new FormControl("",Validators.required),
    description: new FormControl("",Validators.required),
    required: new FormControl(true,Validators.required),
    type:  new FormControl("",Validators.required),
    paramDataType: new FormControl("",Validators.required),
    jsonFormat: new FormControl("" ),
    questionToGetInput: new FormControl(""),
    in: new FormControl(""),
  });
  

  constructor(private parameterService:ServiceParameterService,
    private toast:ToastrService,
    private router:Router,
    private modal : NgbModal){      
  }
 
  close(){
    this.modal.dismissAll();
  }
 

  ngOnInit(): void { 
  }

   
  public preRestCallMethod() {
    this.buttonDissable = true;
    this.submitButton1 = "Loading...";
    this.submitButton2 = "Loading...";
  }

  public postRestCallMethod() {
    this.buttonDissable = false;
    this.submitButton1 = "Add";
    this.submitButton2 = "Finish";
  }




  next(myForm:FormGroup,event:any) {  

  
    if( event.submitter.name == "Add" ){  


        this.serviceId = localStorage.getItem('sId')
        if( this.serviceId == null || this.serviceId == 0) {
          Swal.fire({
            title : 'Warning!',
            text : 'Service is not found. Unable to add intent. Please onboard service first. ',
            icon : 'warning',
            confirmButtonColor : 'var(--theme-deafult)',
          }).then((result)=>{
            localStorage.removeItem('sId');
            this.router.navigate(['main/service/create']);
          });
        }else {
          this.validate = true;
          if (this.myForm.valid) {
         
            this.preRestCallMethod();
    
            var parameter: ServiceParameter = {} as ServiceParameter;
            parameter.serviceId = this.serviceId;
            parameter.description = this.myForm.get('description')?.value || ''; 
            parameter.jsonFormat = this.myForm.get('jsonFormat')?.value || ''; 
            parameter.required = this.item; 
            parameter.type = this.myForm.get('type')?.value || ''; 
            parameter.in = this.myForm.get('type')?.value || ''; 
            parameter.paramType = this.myForm.get('paramDataType')?.value || '';
            parameter.name = this.myForm.get('name')?.value || ''; 
      
            var question = this.myForm.get('questionToGetInput')?.value || ''; 
            parameter.questionToGetInput =   question.split(',');
  
            this.addParameter(parameter);
          } else {
            this.toast.error('Please provide all required values.','ERROR!') ; 
          }          
        }       
       
    } else if( event.submitter.name == "Finish"){
        localStorage.removeItem('sId');
        this.router.navigate(['main/service/list']);
    }  
          
  }

  public addParameter(parameter:ServiceParameter) {
    this.parameterService.onBoard(parameter)
      .subscribe((response)=>{
        if (response.errorCode != undefined && response.errorCode != 200) { 
          this.toast.error('Not able to onboard. please try again in sometime','ERROR!') ;         
        } else {
          this.toast.success(response.message,'Hurrayyy!') ;  
          this.myForm.reset();
          this.validate = false;
        }
      });
  }

 

  get productTitle() {
    return this.myForm.get('product_Title');
  }

  ngOnDestroy(): void { 
  }

}
