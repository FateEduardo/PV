import {Component} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

/**
 * Created by Fernando Martinez on 02/11/16.
 * Simple reusable alert component
 */
@Component({
    template: require('../template/modal-alert.component.html'),
})
export class ModalAlertComponent  {
    constructor( public activeModal: NgbActiveModal){}
    public closeModal():void {
        this.activeModal.close('Canceled');
    }
}
