import {Component, OnInit,Input} from "@angular/core";
import Apiservice = require("../../service/api.service");
import ApiService = Apiservice.ApiService;

@Component({
   
    template: require('../template/product-list.component.html'),
})
export class ProductListComponent implements OnInit{
    public categories :any = [];
    public scategories :any = [];
    public products :any = [];
    private showCategory :boolean = false;
    private actualCategory: string = "";
    public categoryId: number;
    
    constructor(private apiService: ApiService){
        
    }
    
    public ngOnInit(): void {
        this.getSuperCategory();
    }
    
    public getCategory(scategoryId:  number) {
        console.log(scategoryId);
        this.apiService.getCategory(scategoryId).then(
            res => {
                this.categories = res;
            },
            err =>{
                console.error("error while retrieving category list")
            }
        );

    }

    /**
     * Get the super category
     */
    public getSuperCategory() {
        this.apiService.getSuperCategory().then(
            res => {
                this.scategories = res;
                console.log(this.scategories);
            },
            err =>{
                console.error("error while retrieving category list")
            }
        );

    }
    
    public getProducts(category: any) {
       
      /*  this.apiService.getProduct(category.Id).then(
            res => {
                this.actualCategory = category.Name;
                this.products = res;
                
            },
            err =>{
                console.error("error while retrieving category list")
            }
        );*/
    }
    
    
    public dynamicPathSource(category: any) {
        return require("../../asset/img/" + category.Name + ".png");
    }
    
}   