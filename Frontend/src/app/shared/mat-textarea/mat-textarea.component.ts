import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-textarea',
  templateUrl: './mat-textarea.component.html',
  styleUrls: ['./mat-textarea.component.scss']
})
export class MatTextareaComponent implements OnInit {
  @Input() public form:FormControl;
  @Input() public placeholder:string="Add description (optional)"
  constructor() { }

  ngOnInit(): void {
  }

}
