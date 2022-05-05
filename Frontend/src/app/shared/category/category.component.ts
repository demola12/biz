import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DepartmentInterface, ProcessInterface } from 'src/app/processes/model/department.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() public category:DepartmentInterface;
  @Output() public catClick=new EventEmitter<DepartmentInterface>()
  constructor() { }

  ngOnInit(): void {
  }
  clickCategory():void{
    this.catClick.emit(this.category)
  }
}
