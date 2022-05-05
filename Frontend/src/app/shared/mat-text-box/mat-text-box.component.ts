import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-text-box',
  templateUrl: './mat-text-box.component.html',
  styleUrls: ['./mat-text-box.component.scss']
})
export class MatTextBoxComponent implements OnInit {
  @Input() public form:FormControl
  @Input() public placeholder:string="Enter process title here"
  constructor() { }

  ngOnInit(): void {
  }

}
