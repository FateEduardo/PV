import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

/**
 * @author Eduardo Escalona
 *
 * Service for handling alerts
 */
@Injectable()
export class AlertService {

    public  constructor(){}

    public alerts = [];

    // Set AlertService.dismissAlerts = false to avoid the alerts dismissed.
    public dismissAlerts = true;
    // dismissTimer =  5 sec by default
    public dismissTimer = 5000000000000;

    public pendingDismissAlert : any;


    public successAlert(message):void {
        this.addAlert('success', 'fa fa-check-circle-o', message);
    }


    public warningAlert(message):void {
        this.addAlert('warning', 'fa fa-exclamation-triangle', message);
    }

    public errorAlert(message):void {
        this.addAlert('danger', 'fa fa-times-circle-o', message);
    }

    /**
     * Create an alert of type: type. This alert is dismissed by default.
     * Set this.dismissAlerts = false to avoid the alerts dismissed.
     *
     * @param type
     * @param icon
     * @param message
     */
    private addAlert(type: string, icon: string, message: string):void {
        this.alerts.push({type: type, icon: icon, msg: message});

        if (this.dismissAlerts) {
            let timer = Observable.timer(this.dismissTimer);

            this.pendingDismissAlert = timer.subscribe(t => {
                this.alerts.splice(0, 1);
                this.pendingDismissAlert = null;
            });
        }
    }

    /**
     * Delete all the current alerts
     */
    public clearAlerts():void {
        this.alerts = [];

        if (this.pendingDismissAlert)
            this.pendingDismissAlert.unsubscribe();
    }
}