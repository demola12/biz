import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectOptionsInterface } from 'src/app/_models/all-interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() public options:SelectOptionsInterface[];
  @Input() public selectedOption:SelectOptionsInterface;
  @Output() public selected=new EventEmitter<SelectOptionsInterface>();
  selectedObj:SelectOptionsInterface
  constructor() { }

  ngOnInit(): void {
    
  }
  public getSelectedStatus($event:boolean):string{
    if($event){
      return "selected";
    }else{
      return "";
    }
  }
public onChange($event:SelectOptionsInterface):void{
  this.selected.emit($event)
}
}

