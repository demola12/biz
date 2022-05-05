import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processes',
  template: `<app-nav-bar [links]="nav"></app-nav-bar><router-outlet></router-outlet>`,
})
export class ProcessesComponent implements OnInit,OnChanges {

  public content:string="";
  public nav:{name:string,link:string,index:number}[]=[{
    link:'/process',
    name:"Dashboard",
    index:0
      },{
        link:'/process/add-process',
        name:"Add Process",
        index:1

    }]
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(this.router.url)
  }
ngOnChanges(changes: SimpleChanges): void {
    console.log(this.router.url)
}
}
