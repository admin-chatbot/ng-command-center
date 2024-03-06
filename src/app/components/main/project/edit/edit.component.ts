import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApplicationService } from '../application.service';
import { Router } from '@angular/router';
import { Application } from 'src/app/entity/application';

@Component({
  selector: 'app-edit', 
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit,AfterViewInit{

  public validate = false;
  public form : FormGroup
  public submitted = false;
  public application: Application |any;

  constructor(private formBuilder: FormBuilder,
    private toast:ToastrService,
    private applicationService:ApplicationService,
    private router: Router){     

      const navigation = this.router.getCurrentNavigation();
      if( navigation!=null) {
        const state = navigation.extras.state as {application:{}}
        this.application = state.application
      } 

      this.form = this.formBuilder.group({
        name: ['', [Validators.required]],
        purpose: ['', [Validators.required]],
        appUrl: ['', [Validators.required]],
        swagerUrl: ['' ,[Validators.required]], 
      });

    }
    ngAfterViewInit(): void {
      this.form.controls['name'] = this.application.name;
    }
  
    ngOnInit(): void {
      
      
    }
  
    get f() { return this.form.controls; }
  
    submit() {    
      this.validate = !this.validate;
    }
}
