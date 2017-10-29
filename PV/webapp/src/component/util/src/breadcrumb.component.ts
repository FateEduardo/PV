import {Component} from "@angular/core";
/**
 * Created by ADMIN on 14/10/2017.
 */

@Component({
    selector: 'breadcrumb',
    template: require("../template/breadcrumb.component.html")
})
export class BreadCrumb {

    private tabs = [];

    constructor(){}
    
    public addTab(tab :string){
        this.tabs.push({name:tab, number: this.tabs.length+1});
    }
    
    public selecClass(tabNumber :number) : boolean {
       return  (tabNumber == this.tabs.length);
    }
}