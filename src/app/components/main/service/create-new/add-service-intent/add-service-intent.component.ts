import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; 
import { ServiceIntendService } from '../../service-intend.service';
import { ServiceIntend } from '../../serviceIntend'; 
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service-intent', 
  templateUrl: './add-service-intent.component.html',
  styleUrl: './add-service-intent.component.scss'
})
export class AddServiceIntentComponent {


  public htmlContent = '';
  public activeStep: number = 2;
  public validate: boolean = false;
  public html = '';
  public submitButton1 = "Add";
  public submitButton2 = "Add And Next";
  public buttonDissable = false;
  public serviceId: any = 0;
  @Output() activeSteps = new EventEmitter<number>();


  myForm = new FormGroup({ 
    intend: new FormControl("",Validators.required),
    question: new FormControl("",Validators.required),
  })
  

  constructor(private intendService:ServiceIntendService,
    private toast:ToastrService,private router:Router){
    
  }

 
  next(myForm:FormGroup,event:any) {


    if( event.submitter.name == "Finish" ){ 
      this.router.navigate(['main/service/list']);
    } else {

       this.serviceId = localStorage.getItem('sId') 
        if( this.serviceId == null ||  this.serviceId == 0) {
          Swal.fire({
            title : 'Warning!',
            text : 'Service is not found. Unable to add intent. Please onboard service first. ',
            icon : 'warning',
            confirmButtonColor : 'var(--theme-deafult)',
          }).then((result)=>{
            localStorage.removeItem('sId');
            this.router.navigate(['main/service/create']);
          });        
        }


    
        if (this.myForm.valid) {     
          
          this.validate = true;
          this.buttonDissable = true;
          this.submitButton1 = "Loading...";
          this.submitButton2 = "Loading..."; 


          var serviceIntend: ServiceIntend = {} as ServiceIntend;
          serviceIntend.questions = [];
          serviceIntend.serviceId = this.serviceId;
          serviceIntend.intend = this.myForm.get('intend')?.value || '';    
          serviceIntend.questions = this.myForm.get('question')!=null?this.myForm.get('question')?.value?.trim().split('\n') || []:[];    

          if( event.submitter.name == "Add" ){  
            this.addIntend(serviceIntend);
            this.buttonDissable = false;
          } else if( event.submitter.name == "Next"){  
            this.addIntend(serviceIntend);
            this.buttonDissable = false;
            const number = this.activeStep + 1; 
            this.activeSteps.emit(number);
          }

          this.buttonDissable = false;
          this.submitButton1 = "Add";
          this.submitButton2 = "Add And Next";
        }   
    }     
  } 

  public addIntend(intend:ServiceIntend) {
    this.intendService.addIntend(intend)
      .subscribe((response)=>{
        if (response.errorCode != undefined && response.errorCode != 200) { 
          this.toast.error('Not able to onboard. please try again in sometime','ERROR!') ;         
        } else {
          this.toast.success(response.message,'success');
        }
      });
  }

   

  get productTitle() {
    return this.myForm.get('product_Title');
  }


  ngOnInit(): void { 
  }
  ngOnDestroy(): void { 
  }

}
