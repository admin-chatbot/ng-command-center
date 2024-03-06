import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Application } from 'src/app/entity/application';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss']
})
export class CreateNewComponent  implements OnInit {
  
  public validate = false;
  public form : FormGroup
  public submitted = false;

  constructor(private formBuilder: FormBuilder,
    private toast:ToastrService,
    private applicationService:ApplicationService){


      this.form = this.formBuilder.group({
        name: ['', [Validators.required]],
        purpose: ['', [Validators.required]],
        appUrl: ['', [Validators.required]],
        swagerUrl: ['', [Validators.required]]
      });

    }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get f() { return this.form.controls; }

  submit() {    
    this.validate = !this.validate;

    if(!this.form.valid){
      return
    }
    this.submitted = true;

    const application : Application = {} as Application;

    application.createdUserId = 'WEB';
    application.updatedUserId = 'WEB';
    application.name = this.f['name'].value;
    application.purpose = this.f['purpose'].value;
    application.sourceUrl = this.f['appUrl'].value;
    application.serviceDocUrl = this.f['swagerUrl'].value;
    application.clintId = 0;

    this.applicationService.onBoard(application)
        .subscribe(r=>{  
          if (r.errorCode != undefined && r.errorCode != 200) { 
            this.toast.error(r.errorMessage, 'Alert!')           
          } else {                 
              this.toast.success('success',r.message);   
              this.form.reset();
          }  
          this.submitted = false;        
        });
    
  }

}
