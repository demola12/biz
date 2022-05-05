import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { DepartmentInterface, ProcessInterface, StepInterface } from '../../model/department.interface';
import { UserService } from 'src/app/_services';
import { Router } from '@angular/router';
import { SelectOptionsInterface } from 'src/app/_models/all-interface';
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {
  public processDatas:ProcessInterface[]=[];
  public selectedDepartment:DepartmentInterface;
  public selectedProcess:ProcessInterface;
  public allSteps:StepInterface[]=[];
  public options:SelectOptionsInterface[]=[
    {id:1,value:"Show incompleted processes"},
    {id:2,value:"Show completed processes"}
  ]
  public completedDropdown:boolean=false;
  foods:{value: string; viewValue: string;}[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  categoryProcesses:DepartmentInterface[]=[]
  constructor(private processStore: Store<any>,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.processStore.pipe(select('processes'),take(1))
    .subscribe((v)=>{
      if(v){
        this.categoryProcesses=JSON.parse(JSON.stringify(v.processes));
      }
      
    })
  }
  selectedOption($event:SelectOptionsInterface):void{
    if($event.id=="1"){
      this.completedDropdown=false;
    }else{
      this.completedDropdown=true;
    }

  }
  drop(event: CdkDragDrop<ProcessInterface[]>) {
    moveItemInArray(this.processDatas, event.previousIndex, event.currentIndex);
    this.userService.processPositionUpdate(this.processDatas)
    .pipe(take(1))
    .subscribe(v=>{
      console.log(v)
    })
    console.log(this.processDatas)
  }
  categoryClick($event:DepartmentInterface):void{
    this.selectedDepartment=$event;
    this.processDatas=$event.process.sort((a, b) => a.position - b.position);
    this.selectedProcess=undefined;
  }
  public addProcess():void{
    this.router.navigate(['/process/add-process'])
  }
  get per():string[]{
    let cnt:number=0;
    this.allSteps.forEach(v=>{
      if(v.completed){
        cnt++;
      }
    });
    if(this.allSteps.length>0){
      return [((cnt/this.allSteps.length)*100).toFixed(0),(cnt+1).toString()]
    }else{
      return ["0",'1'];
    }
  }
  calculatePercentage(data:ProcessInterface):string{
    let cnt:number=0;
    data.steps.forEach(v=>{if(v.completed){cnt++;}});
    if(data.steps.length>0){
      return ((cnt/data.steps.length)*100).toFixed(0)
    }else{
      return "0";
    }
  }
  get completedStep():StepInterface[]{
    let step:StepInterface[]=this.allSteps.filter(v=>v.completed===true);
    return step;
  }
  get selectedStep():StepInterface{
    if(this.allSteps.length>0){
      let step:StepInterface[]=this.allSteps.filter(v=>v.completed===false);
      if(step.length>0){
        return step[0]
      }else{
        return undefined
      }
      
    }else{
      return undefined
    }
    
  }
  markStep($event:StepInterface):void{
    
    this.allSteps.filter(v=>v.id===$event.id)[0].completed=$event.completed;
    this.userService.stepDoneAndUndone($event)
    .pipe(take(1))
    .subscribe(v=>{
      console.log(v)
    })
  }
  getSteps($event:ProcessInterface):void{
    
    let res:StepInterface[]=$event.steps;
    this.allSteps=res.sort((a, b) => a.position - b.position)
    this.selectedProcess=$event;
    this.completedDropdown=false;
  }
}
