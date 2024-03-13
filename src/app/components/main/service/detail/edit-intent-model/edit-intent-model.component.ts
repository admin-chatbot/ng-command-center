import { AfterViewInit, Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceIntend } from '../../serviceIntend';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ServiceIntendService } from '../../service-intend.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-intent-model', 
  templateUrl: './edit-intent-model.component.html',
  styleUrl: './edit-intent-model.component.scss'
})
export class EditIntentModelComponent implements AfterViewInit{

  public validate: boolean = false;
  public html = '';
  public submitButton1 = "Edit"; 
  public buttonDissable = false;
  @Input() intent:ServiceIntend;
  @Input() serviceId:number;
  
  myForm = new FormGroup({ 
    intend: new FormControl("",Validators.required),
    question: new FormControl("",Validators.required),
  });  

  constructor(
    private intendService:ServiceIntendService,
    private toast:ToastrService,
    private modal : NgbModal){
      

    }
  ngAfterViewInit(): void {
    this.myForm.patchValue({
      intend:this.intent.intend,
      question:this.intent.questions.toString()
    })
  }


  submit(myForm:FormGroup,event:any) {
    
   

      if( this.intent == null ||  this.serviceId== 0) {
        Swal.fire({
          title : 'Warning!',
          text : 'Service is not found. Unable to add intent. Please onboard service first. ',
          icon : 'warning',
          confirmButtonColor : 'var(--theme-deafult)',
        });
      }
      this.validate = true; 
      if (this.myForm.valid) {    
                 
        this.buttonDissable = true;
        this.submitButton1 = "Loading..."; 

        alert(this.myForm.get('question')?.value)

        var serviceIntend: ServiceIntend = {} as ServiceIntend;
        serviceIntend.questions = [];
        serviceIntend.id = this.intent.id;
        serviceIntend.serviceId = this.serviceId;
        serviceIntend.intend = this.myForm.get('intend')?.value || '';    
        serviceIntend.questions = this.myForm.get('question')!=null?this.myForm.get('question')?.value?.trim().split('\n') || []:[];   

        this.edit(serviceIntend);

        this.validate = false;
        this.buttonDissable = false; 
        this.submitButton1 = "Edit"; 
      }  
  }


  public edit(intend:ServiceIntend) {
    this.intendService.editIntent(intend)
      .subscribe((response)=>{
        if (response.errorCode != undefined && response.errorCode != 200) { 
          this.toast.error('Not able to onboard. please try again in sometime','ERROR!') ;         
        } else {
          Swal.fire({
            title : 'Success!',
            text :response.message,
            icon : 'success',
            confirmButtonColor : 'var(--theme-deafult)',
          });   
          this.myForm.reset();
        }
      });
  }
    

  close(){
    this.modal.dismissAll();
  }

}
