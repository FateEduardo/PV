import {Component, OnInit,Input} from "@angular/core";
import {ApiService} from "../../service/api.service";
import {AlertService}  from"../../service/alert.service";
import {WindowLoadingModel} from "../../model/window-loading.model";
import {Product} from "../../model/product.model";
import {letProto} from "rxjs/operator/let";

@Component({
    template: require('../template/product-list.component.html')
})
export class ProductListComponent implements OnInit{
    
    public categories :any = [];
    public scategories :any = [];
    public products :any = [];
    private showCategory :boolean = true;
    private actualCategory: string = "";
    public categoryId: number;
    public loader = new WindowLoadingModel();
    public productDTO = new Product();
    public tabs = [];
    
    constructor(private apiService: ApiService, private alertService : AlertService){
        
    }
    
    
    public ngOnInit(): void {
        this.getSuperCategory();
      
    }


    /**
     * 
     * @param scategoryId
     */
    public getCategory(scategorie:  any) {
        this.loader.setLoading(true);
        this.showCategory = true;
        this.apiService.getCategory(scategorie.Id).then(
            categories => {
                this.categories = categories;
                this.loader.setLoading(false);

            },
            err =>{
                this.alertService.errorAlert("Error mientras se obtenian las categorias");
                this.loader.setLoading(false);
            }   
        );

    }

    /**
     * Get the super category
     */
    public getSuperCategory() {
        this.loader.setLoading(true);
        this.apiService.getSuperCategory().then(
            scategories => {
                this.scategories = scategories;
                this.getCategory(this.scategories[0]);
                this.loader.setLoading(false);

            },
            err =>{
                this.alertService.errorAlert("Error mientras se obtenian las áreas");
                this.loader.setLoading(false);
            }
        );

    }
    
    public getProducts(category: any) {
       this.actualCategory = category.Name;
       this.showCategory = false;
        this.apiService.getProduct(category.Id).then(
            products => {
                this.products = products;
            },
            err =>{
                console.error("error while retrieving category list")
            }
        );
    }
    
    public findProductByName() {
        this.showCategory = false;
        this.loader.setLoading(true);
        this.apiService.findProduct(this.productDTO).then(
            products => {
                this.products = products;
                console.log(products);
                this.loader.setLoading(false);
             
            },
            err =>{
                console.error("error while retrieving category list");
                this.loader.setLoading(false);
            }
        );
    }
    
    public dynamicPathSource(category: any) {
        return require("../../asset/img/" + category.Name + ".png");
    }    
}   