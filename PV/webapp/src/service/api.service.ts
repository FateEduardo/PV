import {Injectable, Inject} from "@angular/core";
import {Http, RequestOptions, Response, ResponseContentType} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {AuthHttp} from "angular2-jwt";
import {JwtService} from "./jwt.service";

/**
 * Created by Fernando Martinez on 25/10/16.
 * consolidate api requests, preferably return Observables or promises
 */
@Injectable()
export class ApiService {

    constructor(private http: Http, @Inject('API_HOST') private apiHost: string, public authHttp: AuthHttp,
                private jwtService: JwtService) {
    }

    /**
     * SESSION HANDLING
     *******************************************************************************************************************/

    /**
     * (siteminder only) handshake when user is pre-authenticated
     * @returns {Promise<Response>}
     */
    public isPreAuthenticated() {
        return this.http.get(this.apiHost + 'token').map(res => res.text()).toPromise();
    }
    
    public getSuperCategory() {
        return this.authHttp.get(this.apiHost + 'scategory').map(res => res.json()).toPromise();
    }

    public getCategory(scategoryId: number) {
        return this.authHttp.get(this.apiHost + 'category/' + scategoryId).map(res => res.json()).toPromise();
    }

    public getProduct(categoryId: number) {
        return this.authHttp.get(this.apiHost + 'product/' + categoryId).map(res => res.json()).toPromise();
    }

    public findProduct(product: any) {
        return this.authHttp.post(this.apiHost + 'product',product).map(res => res.json()).toPromise();
    }

}
