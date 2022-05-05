import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { RegisterInterface } from 'src/app/_models/all-interface';
import { AuthenticationService } from 'src/app/_services';
import { Countries } from '../../model/country';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public emailFormControl:FormControl;
  public fullname:FormControl;
  public password:FormControl;
  public password1:FormControl;
  public jobTitle:FormControl;
  public companyName:FormControl;
  public phone:FormControl;
  public countryName:FormControl;
  public matcher = new MyErrorStateMatcher()
  public step1 : boolean = true;
  public step2 : boolean = false;
  public selectedCountry:string='NG';
  signupDetails:RegisterInterface={
    email:"",
    name:"",
    password:"",
    company_name:"",
    phone:"",
    job_title:"",
    country:"",
  }
  cons = Countries;

  constructor(private authenticationService:AuthenticationService,private router:Router) {
   
   }

  ngOnInit(): void {
    this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  this.fullname = new FormControl('',[Validators.required]);
  this.password = new FormControl('',[Validators.required]);
  this.password1 = new FormControl('',[Validators.required]);
  this.jobTitle = new FormControl('',[Validators.required]);
  this.companyName = new FormControl('',[Validators.required]);
  this.phone = new FormControl('',[Validators.required]);
  this.countryName = new FormControl('',[Validators.required]);
  }
  submit():void{
    if(
      this.companyName.valid &&
      this.phone.valid &&
      this.countryName.valid &&
      this.jobTitle.valid 
    ){
      this.signupDetails.company_name=this.companyName.value;
      this.signupDetails.phone=this.phone.value;
      this.signupDetails.country=this.countryName.value;
      this.signupDetails.job_title=this.jobTitle.value;
      this.authenticationService.register(this.signupDetails)
      .pipe(take(1))
      .subscribe(res=>{
        if(res.status){
          localStorage.setItem('currentUser', JSON.stringify(res.token));
          this.router.navigate(['/process'])
        }else{
          console.log("Error")
        }
      },
      ()=>{
        console.log("Error")
      })
    }
    
  }
  // All is this method
onPasswordChange() {
  if (this.confirm_password.value == this.mainpassword.value) {
    this.confirm_password.setErrors(null);
  } else {
    this.confirm_password.setErrors({ mismatch: true });
  }
}

// getting the form control elements
get mainpassword(): AbstractControl {
  return this.password;
}

get confirm_password(): AbstractControl {
  return this.password1;
}
  onClick($event:boolean) {
    this.emailFormControl.markAsTouched() 
      this.password.markAsTouched() 
      this.fullname.markAsTouched()  
    if(
      this.emailFormControl.valid &&
      this.password.valid &&
      this.fullname.valid &&
      this.password1.valid
    ){
  
        this.signupDetails.email=this.emailFormControl.value;
        this.signupDetails.password=this.password.value;
        this.signupDetails.name=this.fullname.value;
        this.step1 = !this.step1;
      
    }
    
  }
/*   onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
              if(data?.status){
                this.router.navigate(['/dashboard']);
              }else{
                this.error = data?.message;
                this.loading = false;
              }
                
            },
            error => {
                this.error = error;
                this.loading = false;
            });
} */
}
