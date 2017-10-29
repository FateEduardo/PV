/**
 * Created by ADMIN on 14/10/2017.
 */
import {Injectable} from '@angular/core';

/**
 * @author Eduardo Escalona
 *
 * FileTypes constant values
 */
export class WindowLoadingModel {
   private loading: boolean = false;
   
   
   public getLoading() : boolean {
       return this.loading
   }
   
   public setLoading(loading: boolean) {
       this.loading = loading;
}
   
    
}