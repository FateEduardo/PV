import {Injectable, Inject} from "@angular/core";
import {Http, Response, ResponseContentType} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {AuthHttp} from "angular2-jwt";

/**
 * Created by Fernando Martinez on 25/10/16.
 * consolidate api requests, preferably return Observables or promises
 */
@Injectable()
export class ApiService {

    constructor(private http: Http, @Inject('API_HOST') private apiHost: string, public authHttp: AuthHttp) {
    }

    /**
     * SESSION HANDLING
     *******************************************************************************************************************/

    /**
     * (siteminder only) handshake when user is pre-authenticated
     * @returns {Promise<Response>}
     */
    public isPreAuthenticated() {
        return this.http.get(this.apiHost + 'preAuth').map(res => res.text()).toPromise();
    }

}
