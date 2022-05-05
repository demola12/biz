import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StepInterface } from 'src/app/processes/model/department.interface';

@Component({
  selector: 'app-checkcard',
  templateUrl: './checkcard.component.html',
  styleUrls: ['./checkcard.component.scss']
})
export class CheckcardComponent implements OnInit,OnChanges {
  @Input() public step:StepInterface;
  public currentstep:StepInterface;
  @Output() public selectedStep= new EventEmitter<StepInterface>();
  selected:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.currentstep=this.step;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.step){
      console.log(changes.step.currentValue)
      this.currentstep=changes.step.currentValue;
    }
  }
  selectedProcess():void{
    this.step.completed=!this.step.completed
    this.selectedStep.emit(this.step)
  }


}
