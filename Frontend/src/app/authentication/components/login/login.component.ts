import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/_services';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public password = new FormControl('');
  public matcher = new MyErrorStateMatcher()
  public returnUrl:string

  constructor(private authenticationService:AuthenticationService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['s'] || '/';
  }
  onSubmit():void{
    if(this.emailFormControl.valid && this.password.valid){
      this.authenticationService.login({
        email:this.emailFormControl.value,
        password:this.password.value
      })
      .pipe(take(1))
      .subscribe(res=>{
        if(res.status){
          this.router.navigate([this.returnUrl])
          
        }
        
      })
    }
  }

}
