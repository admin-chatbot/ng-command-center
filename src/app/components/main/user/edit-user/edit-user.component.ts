import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/entity/user';
import { Enums } from 'src/app/enums/enums';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Application } from 'src/app/entity/application';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',  
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit,AfterViewInit {
  applications: Application[] = [];
  public validate = false;
  public submitted = false;
  user: User | any;
  public enums = new Enums;
  public applicationMap = new Map<number,string>;
  public apps:number[];
  clientId:any;
  newStatus: any;

  public form = this.formBuilder.group({
    id: ['0', [Validators.required]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    mobileNumber: ['', Validators.required],
    accessType: ['USER', Validators.required],
    status: ['NEW', Validators.required], 
    applicationName: ['', Validators.required],
    empId: ['', Validators.required]
  });



  constructor(private formBuilder: FormBuilder,
    private toast:ToastrService,
    private userService:UserService,   
    private router: Router ,private serviceService:ServiceService){  
      //this.clientId=localStorage.getItem('id');
      this.fetchApplicationList();
      const navigation = this.router.getCurrentNavigation(); 
      if(navigation!=null) {   
        const state = navigation.extras.state ;
        const user =  navigation?.extras.state?.['data']         
           
        this.apps = user.applications;
        alert(this.apps)
        this.form.patchValue({
          id: user.id,
          name: user.name,
          email: user.email,
          mobileNumber: user.mobileNumber,
          accessType: user.accessType,
          status: user.status,
          applicationName: user.applicationName,
          empId: user.empId
        })  
      } 

  
       
    }
 

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


    public edit(user:User) {
      this.userService.edit(user)
      .subscribe(r=>{ 
        if (r.errorCode != undefined && r.errorCode != 200) { 
          this.toast.error('Not able to onboard. please try again in sometime','ERROR!') ;         
        } else {
          this.toast.success('Successfully Update Application','Hurrayyyy') 
        }  
        this.submitted = false;       
      });
    }

    ngAfterViewInit(): void {       
     
    }
  
    ngOnInit(): void {
           
    }

    cancel() {
      this.router.navigate(['main/user/list']);
    }
  
    get f() { return this.form.controls; }

    public notNullCheck(control:FormControl) : any {
        control.value!=null?this.f['applicationName'].value:"";
      }


       
    submit() {    
      this.validate = !this.validate;
      if (this.form.invalid) {   
        this.toast.error(  "All field are required." ,'ERROR');
        return;
      }
      this.submitted = true;
      const updatedUser: User = {} as User; 
      
      
      updatedUser.id= this.notNullCheck(this.f['id']);
      updatedUser.name= this.notNullCheck(this.f['name']);
      updatedUser.mobileNumber= this.notNullCheck(this.f['mobileNumber']);
      updatedUser.accessType= this.notNullCheck(this.f['accessType']);
      updatedUser.status= this.notNullCheck(this.f['status']);
      
     
      updatedUser.applications= this.notNullCheck(this.f['applicationName'])
      updatedUser.empId= this.notNullCheck(this.f['empId']);
      updatedUser.id= this.notNullCheck(this.f['id']);
           
      this.edit(this.user);

    }

    
}

