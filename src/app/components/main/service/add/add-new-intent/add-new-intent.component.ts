import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceIntendService } from '../../service-intend.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceIntend } from '../../serviceIntend';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-new-intent', 
  templateUrl: './add-new-intent.component.html',
  styleUrl: './add-new-intent.component.scss'
})
export class AddNewIntentComponent {

  public htmlContent = ''; 
  public validate: boolean = false;
  public html = '';
  public submitButton1 = "Add"; 
  public buttonDissable = false;
  @Input() public serviceId: any = 0;   


  myForm = new FormGroup({ 
    intend: new FormControl("",Validators.required),
    question: new FormControl("",Validators.required),
  });  

  constructor(private intendService:ServiceIntendService,
    private toast:ToastrService,private router:Router,private modal : NgbModal){
    
  }
 
  next(myForm:FormGroup,event:any) {
    if( event.submitter.name == "Finish" ){ 
      this.router.navigate(['main/service/list']);
    } else {
        if( this.serviceId == null ||  this.serviceId == 0) {
               this.toast.error("Service Not Found. Please close this.","So Sorry");
        }
    
        if (this.myForm.valid) {    
                    
          this.validate = true;
          this.buttonDissable = true;
          this.submitButton1 = "Loading..."; 

          var serviceIntend: ServiceIntend = {} as ServiceIntend;
          serviceIntend.questions = [];
          serviceIntend.serviceId = this.serviceId;
          serviceIntend.intend = this.myForm.get('intend')?.value || '';    
          serviceIntend.questions = this.myForm.get('question')!=null?this.myForm.get('question')?.value?.trim().split('\n') || []:[];    
          this.addIntend(serviceIntend);
          this.validate = false
          this.buttonDissable = false; 
          this.submitButton1 = "Add"; 
        }   
    }     
  } 

  public addIntend(intend:ServiceIntend) {
    this.intendService.addIntend(intend)
      .subscribe((response)=>{
        if (response.errorCode != undefined && response.errorCode != 200) { 
          this.toast.error('Not able to onboard. please try again in sometime','ERROR!') ;         
        } else {
          Swal.fire({
            title : 'Success!',
            text : response.message ,
            icon : 'success',
            confirmButtonColor : 'var(--theme-deafult)',
          });
          this.myForm.reset();
        }
      });
  }

   

  get productTitle() {
    return this.myForm.get('product_Title');
  }

  close() {
    this.modal.dismissAll();
  }

  /**
   * 
   * Swal.fire({
            title : 'Warning!',
            text : 'Service is not found. Unable to add intent. Please onboard service first. ',
            icon : 'warning',
            confirmButtonColor : 'var(--theme-deafult)',
          }).then((result)=>{
            localStorage.removeItem('sId');
            this.router.navigate(['main/service/create']);
          });   
   * 
   */
 
}
