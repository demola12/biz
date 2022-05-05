import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-combo-with-button',
  templateUrl: './mat-combo-with-button.component.html',
  styleUrls: ['./mat-combo-with-button.component.scss']
})
export class MatComboWithButtonComponent implements OnInit {
  @Input() public data:{id:number;value:string}[]=[]
  @Output() public addButton=new EventEmitter<boolean>()
  @Input() public form:FormControl
     
  constructor() { }

  ngOnInit(): void {
  }
  openDialog() {
    this.addButton.emit(true)
  }
}
