import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { NewStepInterface } from '../../model/department.interface';
import { StepPopupComponent } from '../step-popup/step-popup.component';

@Component({
  selector: 'app-add-step',
  templateUrl: './add-step.component.html',
  styleUrls: ['./add-step.component.scss']
})
export class AddStepComponent implements OnInit {
  @Input() public step:NewStepInterface
  @Input() public position:number;
  @Output() public newStepClick=new EventEmitter<number>();
  public titleForm: FormControl = new FormControl(null);
  public description: FormControl = new FormControl('');
  constructor(private dialog:MatDialog) { }
  
  openDialog() {
    const dialogRef = this.dialog.open(StepPopupComponent, {
      width: '800px',
      height: 'auto',
      maxHeight:'80%',
      disableClose: false,
      data:{titleForm:this.titleForm,description:this.description  }
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      this.step.name=this.titleForm.value;
      this.step.description=this.description.value || "";
    });
  }
  public newStep():void{
    this.newStepClick.emit(this.position+1)
  }
  ngOnInit(): void {
    this.step.position=this.position+1
  }

}
