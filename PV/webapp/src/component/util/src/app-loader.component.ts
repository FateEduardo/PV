import {Component, Input} from "@angular/core";
/**
 * Created by ADMIN on 14/10/2017.
 */


@Component({
    selector: 'app-loader',
    template: require("../template/loader.component.html")
})
export class LoaderComponent {
    
    @Input()
    public loading :boolean;
    
    constructor(){}
}