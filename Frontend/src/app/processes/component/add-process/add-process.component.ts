
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { ToastNotificationService } from 'src/app/shared/toast-notification/toast-notification.service';
import { UserService } from 'src/app/_services';
import { AddCategoryComponent } from '../../component-pieces/add-category/add-category.component';
import { DepartmentInterface, NewStepInterface } from '../../model/department.interface';
import { ProcessesAction } from '../../state/processes.action';


@Component({
  selector: 'app-add-process',
  templateUrl: './add-process.component.html',
  styleUrls: ['./add-process.component.scss']
})
export class AddProcessComponent implements OnInit {

  public steps: NewStepInterface[] = [{
    name: "",
    description: "",
    position: 0
  }]
  public titleForm: FormControl = new FormControl(null, [Validators.required])
  public descriptionForm: FormControl = new FormControl('')
  public comboForm: FormControl = new FormControl(null, [Validators.required])
  public processPosition:number=1;
  public categoryProcesses: DepartmentInterface[] = [];
  public comboInterface: { id: number; value: string }[] = [];
  private unsubscriber$: Subject<void> = new Subject<void>();
  constructor(private dialog: MatDialog,private userService:UserService, private route: Router, private processStore: Store<any>,private toastNotificationService:ToastNotificationService) { }
  public openDialog() {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '400px',
      height: '100%',
      disableClose: false,
      position: { right: '0', top: '0' },
      panelClass: "as"
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  public submitForm($event:boolean):void{
    this.titleForm.markAsTouched() 
     this.comboForm.markAsTouched()
     let pass:boolean=true
     this.steps.forEach(step=>{
      if(step.name==""){
        pass=false;
        return;
      }
    })
    if(this.titleForm.valid && this.comboForm.valid && pass){
      
      
      let positionCal=this.categoryProcesses.filter(v=>v.id===this.comboForm.value)
      let lak:number
      if(positionCal?.length>0){
        lak=positionCal[0].process.length +1;
      }else{
        lak=1;
      }
      
      this.userService.saveProcess({
        name:this.titleForm.value,
        department:this.comboForm.value,
        description:this.descriptionForm.value || "",
        steps:this.steps,
        position:lak
      }).pipe(take(1))
      .subscribe(v=>{
        this.processStore.dispatch(
          new ProcessesAction()
        );
        if($event){
          this.resetForm()
        }else{
          this.route.navigate(['/process'])
        }
      })
    }else{
      alert("")
      this.toastNotificationService.sendErrorToast("Some of the field are invalid",5000)
    }
   
  
   
  }
  public resetForm():void {
    this.steps=[{
      name: "",
      description: "",
      position: 0
    }]
    this.titleForm.reset()
  this.descriptionForm.reset()
  this.comboForm.reset()
    
  }
  public ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
  public addstep($event): void {
    this.steps.push({
      name: "",
      description: "",
      position: 0
    })
  }
  ngOnInit(): void {
    this.processStore.pipe(select('processes'), takeUntil(this.unsubscriber$))
      .subscribe((v) => {
        if (v) {
          this.comboInterface = [];
          this.categoryProcesses = JSON.parse(JSON.stringify(v.processes));
          this.categoryProcesses.forEach(v => {
            this.comboInterface.push({ id: v.id, value: v.name });
            this.processPosition=v.process.length
          })
        }

      })
  }
  public navigateToProcess(): void {
    this.route.navigate(['/process'])
  }
  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.steps, event.previousIndex, event.currentIndex);

  }
}
