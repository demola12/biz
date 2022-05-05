import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-step-popup',
  templateUrl: './step-popup.component.html',
  styleUrls: ['./step-popup.component.scss']
})
export class StepPopupComponent implements OnInit {

  public content:string="";
  constructor(public dialogRef: MatDialogRef<StepPopupComponent>,@Inject(MAT_DIALOG_DATA) public data: {titleForm:FormControl,description:FormControl}) { }

  ngOnInit(): void {
  }
  public saveStep():void{
    this.dialogRef.close()
  }
}
