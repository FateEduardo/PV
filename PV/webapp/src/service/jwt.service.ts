import {Injectable, Inject} from "@angular/core";
import {AuthHttp, JwtHelper} from "angular2-jwt";
import {Observable} from "rxjs";
import {Http, Headers, RequestOptions} from "@angular/http";
import {DEFAULT_INTERRUPTSOURCES} from "@ng-idle/core";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {IdleExt} from "../util/idle-ext";
//import {ModalAlertComponent} from "../component/util/modal-alert.component";

/**
 * Created by Fernando Martinez on 26/10/16.
 * service to handle all jwt operations
 */
@Injectable()
export class JwtService {

    private tokenId: string = "id_token";
    private tokenRefresh: string = "refresh";
    private refreshSubscription: any;
    //give some seconds to perform the request to the server before token expires
    private serverResponseDelay:number = 2000;

    constructor(private http: Http, private authHttp: AuthHttp, private jwtHelper: JwtHelper, private router : Router,
                @Inject('API_HOST') private apiHost: string, private idle: IdleExt,
                private modalService: NgbModal) {
    }

    public saveToken(token:string) {
        sessionStorage.setItem(this.tokenId, token);
    }

    public removeToken(){
        sessionStorage.removeItem(this.tokenId);
    }

    public getToken(){
       return sessionStorage.getItem(this.tokenId)
    }

    public isValidToken(){
        if(sessionStorage.getItem(this.tokenId)){
            return !this.jwtHelper.isTokenExpired(this.getToken())
        }
        return false;
    }

    public getRefreshToken() {
        return sessionStorage.getItem(this.tokenRefresh);
    }

    public setRefreshToken(token: string) {
        return sessionStorage.setItem(this.tokenRefresh, token);
    }


    /**
     * clears subscriptions and redirects user to login
     */
    public logout(){
        console.log("logging out user")
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
        this.idle.stop()
        //calling location  forces a reload of all components to a clean state
        
        this.router.navigate(['pv/login'])
    }


    /**
     * obtain claims from current stored token
     * @returns {json}
     */
    public getClaims(){
        return this.jwtHelper.decodeToken(this.getRefreshToken())
    }



    /**
     * takes care of refreshing the token
     */
    private refreshToken() { //cambiar
        //setting JWT headers this is a temporary workaround until jwt-angular2 issue with nested
        // observables/promises and http constructor is fixed
        let headers = new Headers();
        let body = {  'grant_type': 'password' };
        headers.append('content-type', "application/x-www-form-urlencoded");
        headers.append('refresh_token', this.getRefreshToken());

        let options = new RequestOptions({headers: headers});
        return this.http
            .post(this.apiHost + 'token', this.undeCodeData(body), options)
            .map(res => res.text()).toPromise()
    }

    private undeCodeData(user: any) {
        var p = [];
        for (var key in user) {
            p.push(key + '=' + encodeURIComponent(user[key]));
        }
        return p.join('&');
    }
}