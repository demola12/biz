import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import {  Router } from '@angular/router';

import { MatMenuTrigger } from '@angular/material/menu';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	providers: []
})
export class SidenavComponent implements OnInit {
	//@ViewChild('sidenav') public sidenav: MatSidenav;
	//@ViewChild('menuTrigger') public trigger: MatMenuTrigger;

	constructor(
		private router: Router,
	) {
	}

	public ngOnInit(): void {
	}

	public ngAfterViewChecked(): void {
	
	}

}
