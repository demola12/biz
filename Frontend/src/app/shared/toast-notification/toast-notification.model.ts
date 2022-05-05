import { ToastNotificationType } from './toast-notification-type.enum';

export class ToastNotificationModel {
	public message: string;
	public type: ToastNotificationType;
	public duration: number;
	public customTitle: string;

	constructor(message: string, type: ToastNotificationType, duration: number = 5000, title?: string) {
		this.message = message;
		this.type = type;
		this.duration = duration;
		this.customTitle = title ?? type;
	}
}
