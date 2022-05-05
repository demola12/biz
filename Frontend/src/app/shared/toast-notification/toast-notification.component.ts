import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { ToastNotificationService } from './toast-notification.service';


@Component({
	selector: 'app-toast-notification',
	templateUrl: './toast-notification.component.html',
	styleUrls: ['./toast-notification.component.scss']
})
export class ToastNotificationComponent implements OnInit, OnDestroy {
	
	constructor(private toastNotificationService: ToastNotificationService,@Inject(MAT_SNACK_BAR_DATA) public data: string) {}

	public ngOnInit(): void {
	}
	public ngOnDestroy(): void {

	}
}
