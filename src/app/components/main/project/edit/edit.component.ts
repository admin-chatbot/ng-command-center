import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApplicationService } from '../application.service';
import { Router } from '@angular/router';
import { Application } from 'src/app/entity/application'; 
import { Enums } from 'src/app/enums/enums';

@Component({
  selector: 'app-edit', 
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit,AfterViewInit{


  public validate = false;
  public submitted = false;
  application: Application | any;
  public enums = new Enums;
  
  clientId:any;
  newStatus: any;

  public form  = this.formBuilder.group({
    name: ['', [Validators.required]],
    purpose: ['', [Validators.required]],
    appUrl: ['', [Validators.required]],
    swagerUrl: ['' ,[Validators.required]], 
    registerDate:['',  [Validators.required]],
    serviceCount:['0'],
    status:['',[Validators.required]]
  });



  constructor(private formBuilder: FormBuilder,
    private toast:ToastrService,
    private applicationService:ApplicationService,   
    private router: Router ){  
      this.clientId=localStorage.getItem('id');
      const navigation = this.router.getCurrentNavigation(); 
      if(navigation!=null) {   
        const state = navigation.extras.state ;
        const applicationId =  navigation?.extras.state?.['appId'];         
        if(applicationId==undefined || applicationId ==null) {
          this.router.navigate(['main/project/list']);
        }         
        this.fetchApplicationById(applicationId);
      } else {
        this.router.navigate(['main/project/list']);
      }

      this.form.get('registerDate')?.disable();
      this.form.get('serviceCount')?.disable();
       
    }

    fetchApplicationById(id:number){
      this.applicationService.fetchApplicationById(id)
        .subscribe((response)=>{
          console.log(response);
          if (response.errorCode != undefined && response.errorCode != 200) {
            this.toast.error('Not able to fetch. please try again in sometime','ERROR');
          }else{      
            this.application = response.data;              
            this.form.patchValue({
              name:response.data.name,
              purpose:response.data.purpose,
              appUrl:response.data.sourceUrl,
              swagerUrl:response.data.serviceDocUrl,
              registerDate:response.data.registerDate,
              serviceCount:response.data.serviceCount,
              status:response.data.status
            })  
          }
        });         
    }


    public edit(application:Application) {
      this.applicationService.edit(application)
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

    getStatus($event: any) {
      let text = $event.target.options[$event.target.options.selectedIndex].text;
      this.newStatus = text;
    }
  
    get f() { return this.form.controls; }
  
    submit() {    
      this.validate = !this.validate;
      if (this.form.invalid) {   
        this.toast.error(  "All field are required." ,'ERROR');
        return;
      }
      this.submitted = true;
      const application: Application = {} as Application;           
      application.createdUserId = 'WEB';
      application.updatedUserId = 'WEB';
      application.name = this.f['name'].value!=null?this.f['name'].value:"";
      application.purpose = this.f['purpose'].value!=null?this.f['purpose'].value:"";
      application.sourceUrl = this.f['appUrl'].value!=null?this.f['appUrl'].value:"";
      application.serviceDocUrl = this.f['swagerUrl'].value!=null?this.f['swagerUrl'].value:"";
      application.id = this.application.id;
      application.status = this.newStatus;
      application.clintId = 0

       
      this.edit(application);

    }
}
