import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { UserService } from 'src/app/_services';
import { ProcessesAction } from '../../state/processes.action';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  titleForm:FormControl=new FormControl(null,[Validators.required])
  constructor(public dialogRef: MatDialogRef<AddCategoryComponent>,
    private processStore:Store<any>,private userService:UserService) { }

  ngOnInit(): void {
  }
  submitForm():void{
    this.titleForm.markAsTouched()
    if(this.titleForm.valid){
      this.userService.addDepartment({name:this.titleForm.value})
      .pipe(take(1))
      .subscribe(v=>{
        this.processStore.dispatch(
          new ProcessesAction()
        );
        this.dialogRef.close()
      })
      
    }
  }
}
