import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { User } from 'src/app/entity/user';


@Component({
  selector: 'app-create-new', 
  templateUrl: './create-new.component.html',
  styleUrl: './create-new.component.scss'
})
export class CreateNewComponent implements OnInit {
  public validate = false;
  public form : FormGroup
  public submitted = false;
applications: any;

  constructor(private formBuilder: FormBuilder,
    private toast:ToastrService,
    private userService:UserService){


      this.form = this.formBuilder.group({
        id: ['0', [Validators.required]],
        name: ['', [Validators.required]],
        email: ['', [Validators.required]], 
        mobileNumber:['',Validators.required],
        accessType:['USER',Validators.required], 
        status:['ACTIVE',Validators.required], 
        applicationName:['',Validators.required],
        empId:['',Validators.required]
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

    const user : User = {} as User;
    
    user.id = this.f['id'].value;
    user.name = this.f['name'].value;
    user.applications=this.f['applicationName'].value;
    user.accessType = this.f['accessType'].value;
    //user.clientId = this.clientId;
    user.email = this.f['email'].value;
    user.empId = this.f['empId'].value;
    user.mobileNumber = this.f['mobileNumber'].value;
    user.status = this.f['status'].value;
    

    this.userService.onBoard(user)
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


