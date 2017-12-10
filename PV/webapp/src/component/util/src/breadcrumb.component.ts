import {Component, Input, OnInit} from "@angular/core";
/**
 * Created by ADMIN on 14/10/2017.
 */

@Component({
    selector: 'breadcrumb',
    template: require("../template/breadcrumb.component.html")
})
export class BreadCrumb {
    
    @Input() public tabs: any = [];

    constructor(){}
    
    public selecClass(tabNumber :number) : boolean {
        console.log(tabNumber == this.tabs.length-1);
       return  (tabNumber == this.tabs.length-1);
    }
    
}


