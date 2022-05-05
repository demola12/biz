import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProcessInterface, StepInterface } from 'src/app/processes/model/department.interface';

@Component({
  selector: 'app-admincard',
  templateUrl: './admincard.component.html',
  styleUrls: ['./admincard.component.scss']
})
export class AdmincardComponent implements OnInit {
@Input() public per:string='0';
@Input() public Process:ProcessInterface;
@Output() public steps=new EventEmitter<ProcessInterface>();
  constructor() { }

  ngOnInit(): void {
  }
  clickStep():void{
   this.steps.emit(this.Process)
  }
}
