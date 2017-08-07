import {Component, OnInit} from "@angular/core";
import Apiservice = require("../../service/api.service");
import ApiService = Apiservice.ApiService;

@Component({
    template: require('../template/product-list.component.html'),
})
export class ProductListComponent implements OnInit{
    public categories = [];
    
    constructor(private apiService: ApiService){
        
    }
    
    public ngOnInit(): void {
        this.getCategory();
    }
    
    public getCategory() {
        this.apiService.getCategory().then(
            res => {
                this.categories = res;
                console.log(this.categories)
            },
            err =>{
                console.error("error while retrieving category list")
            }
        );

    }
    
}