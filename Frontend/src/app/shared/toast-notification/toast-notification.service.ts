import { Injectable } from '@angular/core';
import { ToastNotificationType } from './toast-notification-type.enum';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastNotificationComponent } from './toast-notification.component';

@Injectable({
	providedIn: 'root'
})
export class ToastNotificationService {
	

	constructor(private _snackBar: MatSnackBar) {}



	public sendErrorToast(message: string, duration?: number): void {
		let snackBarRef = this._snackBar.openFromComponent(ToastNotificationComponent, {
			duration: duration | 3000,
			data: message,
			horizontalPosition:'start',
			verticalPosition:'bottom',
		  });
		
	}

	public sendSuccessToast(message: string, duration?: number): void {
		let snackBarRef = this._snackBar.openFromComponent(ToastNotificationComponent, {
			duration: duration | 3000,
			data: message
		  });
		
	}

	public sendWarningToast(message: string, duration?: number): void {
		let snackBarRef = this._snackBar.openFromComponent(ToastNotificationComponent, {
			duration: duration | 3000,
			data: message
		  });
		
	}

	public sendInfoToast(message: string, duration?: number): void {
		let snackBarRef = this._snackBar.openFromComponent(ToastNotificationComponent, {
			duration: duration | 3000,
			data: message
		  });
		
	}

	public dismiss(): void {
		this._snackBar.dismiss();
	}
}
