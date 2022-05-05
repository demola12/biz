import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() public links:{name:string;link:string,index:number}[]=[];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateTo(url:string):void{
    this.router.navigate([url]);
  }
 
}
