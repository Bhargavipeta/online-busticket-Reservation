import { Component,OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { SharedserviceService } from './sharedservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sampleapp';
  name : any;
  email : any;
  mobileno : any;
  password : any;
  dob : any;
  submitted = false;
  signinForm : any= FormGroup;
  message : string = "";
  status : number = 0;
  showRegistrationform : boolean = false;
  isActive : boolean = false;

  
  registrationForm : any= FormGroup;

  constructor(private sharedService : SharedserviceService,
    private router : Router) { }

    ngOnInit(): void {
      this.registrationForm=new FormGroup({


        //-----------------Associate Name-----------------------------
        name:new FormControl(null,[Validators.required]),
  
        email:new FormControl(null,[Validators.required]),
  
        mobileNo:new FormControl(null,[Validators.required]),
  
        password:new FormControl(null,[Validators.required]),
  
        dob:new FormControl(null,[Validators.required]),
      });

      this.signinForm=new FormGroup({
      email:new FormControl(null,[Validators.required]),
  
      password:new FormControl(null,[Validators.required]),
  
      });
    }
  
    getSigninControls(){
      return this.signinForm.controls;
    }
  
    signin(){
      this.sharedService.login(this.signinForm.value).subscribe(
        (data) => {
          this.message=data.message;
          this.status=200;
          this.isActive=true;
          this.router.navigateByUrl('/home');
        },
        (error) => {
          this.message=error.error.message;
          this.status=401;
        }
        
      );
    }
    getControls(){
      return this.registrationForm.controls;
    }
  
    register(){
      console.log(this.registrationForm);
      this.sharedService.addRegister(this.registrationForm.value).subscribe(
        (data) => {
          this.message=data.message;
          this.status = data.status;
          this.clearForm();
          this.showRegistrationform=false;
        },
         (error) => {console.log(error)} 
      );
    }

    signup(){
      this.showRegistrationform=true;
    }
  
    clearForm(){
      this.registrationForm=new FormGroup({
  
  
        //-----------------Associate Name-----------------------------
        name:new FormControl(null,[Validators.required]),
  
        email:new FormControl(null,[Validators.required]),
  
        mobileNo:new FormControl(null,[Validators.required]),
  
        password:new FormControl(null,[Validators.required]),
  
        dob:new FormControl(null,[Validators.required]),
      });
    }
  
  
  }
 
