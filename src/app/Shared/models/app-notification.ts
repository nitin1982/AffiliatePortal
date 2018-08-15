export class AppNotification {
    type: AppNotificationType;
    message: string;
}
 
export enum AppNotificationType {
    Success,
    Error,
    Info,
    Warning
}