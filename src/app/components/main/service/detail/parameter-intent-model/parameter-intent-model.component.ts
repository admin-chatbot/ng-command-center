import { AfterViewInit, Component, EventEmitter, Input, Output, input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Enums } from 'src/app/enums/enums';
import { ServiceParameterService } from '../../service-parameter.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceParameter } from 'src/app/entity/serviceParameters';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-parameter-intent-model', 
  templateUrl: './parameter-intent-model.component.html',
  styleUrl: './parameter-intent-model.component.scss'
})
export class ParameterIntentModelComponent implements AfterViewInit {

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

  @Input() parameter: ServiceParameter;
  @Input() serviceId: number;


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

  ngAfterViewInit(): void {
     this.myForm.patchValue({  
      name: this.parameter.name,
      description: this.parameter.description,
      required: this.parameter.required,
      type:  this.parameter.type,
      paramDataType: this.parameter.paramType,
      jsonFormat: this.parameter.jsonFormat,
      questionToGetInput: this.parameter.questionToGetInput.toString(),
      in: this.parameter.type,
     });
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




 public edit(myForm:FormGroup,event:any) {  

  
    if( event.submitter.name == "Add" ){  


       
        if( this.serviceId == null || this.serviceId == 0) {
          Swal.fire({
            title : 'Warning!',
            text : 'Service is not found. Unable to add intent. Please onboard service first. ',
            icon : 'warning',
            confirmButtonColor : 'var(--theme-deafult)',
          }).then((result)=>{
            this.modal.dismissAll();
          });
        }else {
          this.validate = true;
          if (this.myForm.valid) {
         
            this.preRestCallMethod();
    
            var parameter: ServiceParameter = {} as ServiceParameter;
            parameter.id = this.parameter.id;
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
  
            this.editParameter(parameter);
            this.postRestCallMethod();
          } else {
            this.toast.error('Please provide all required values.','ERROR!') ; 
          }          
        }       
       
    } else if( event.submitter.name == "Finish"){
        localStorage.removeItem('sId');
        this.router.navigate(['main/service/list']);
    }  
          
  }

   

  public editParameter(parameter:ServiceParameter) {
    this.parameterService.editServiceParameter(parameter)
      .subscribe((response)=>{
        if (response.errorCode != undefined && response.errorCode != 200) { 
          this.toast.error('Not able to onboard. please try again in sometime','ERROR!') ;         
        } else {
          Swal.fire({
            title : 'Success!',
            text :response.message,
            icon : 'success',
            confirmButtonColor : 'var(--theme-deafult)',
          }).then((res)=>{
            this.myForm.reset();
            this.validate = false;
          });   
           
        }
      });
  }

 

  get productTitle() {
    return this.myForm.get('product_Title');
  }

  ngOnDestroy(): void { 
  }

}
