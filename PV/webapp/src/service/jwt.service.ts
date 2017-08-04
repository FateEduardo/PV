import {Injectable, Inject} from "@angular/core";
import {AuthHttp, JwtHelper} from "angular2-jwt";
import {Observable} from "rxjs";
import {Http, Headers, RequestOptions} from "@angular/http";
import {DEFAULT_INTERRUPTSOURCES} from "@ng-idle/core";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {IdleExt} from "../util/idle-ext";
//import {ModalAlertComponent} from "../component/util/modal-alert.component";

@Injectable()
export class JwtService {

    private tokenId:string = "id_token";
    private tokenRefreshId:string = "id_refresh_token";
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

    public saveRefreshToken(token:string) {
        sessionStorage.setItem(this.tokenRefreshId, token);
    }

    public removeToken(){
        sessionStorage.removeItem(this.tokenId);
    }
    
    public removeRefreshToken(){
        sessionStorage.removeItem(this.tokenId);
    }

    public getToken(){
        return sessionStorage.getItem(this.tokenId);
    }

    public getRefreshToken(){
        return sessionStorage.getItem(this.tokenRefreshId);
    }
    
    public isValidToken(){
        if(sessionStorage.getItem(this.tokenId)){
            return !this.jwtHelper.isTokenExpired(this.getToken())
        }
        return false;
    }

    /**
     * clears subscriptions and redirects user to login
     */
    public logout() {
        console.log("logging out user");
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
        this.idle.stop();
        //calling location  forces a reload of all components to a clean state
        //window.location.href = './j_spring_security_logout'
         this.removeToken();
         this.removeRefreshToken();
         this.router.navigate(['pv/login']);
        
    }

    /**
     * Watches if user is idle, if so perform log out
     */
    public watchIdle() {
        //seconds warning before user is timed out
        let warningTimeOut = 10;

        //determine the user idle time minus the warning time out in seconds
        let idleTimeOut = ((this.getExpirationTimeFrom(this.getToken()))/1000)-warningTimeOut;

        console.log("idleTimeOut in seconds: ",idleTimeOut);
        // sets an idle timeout of idleTimeOut seconds, no action is tracked by the user and the timeOut starts.
        this.idle.setIdle(idleTimeOut);
        //after (warningTimeOut seconds) of inactivity, the user will be considered timed out.
        this.idle.setTimeout(warningTimeOut);
        // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
        this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

        // Subscribe to idle events. Add your logic on how the application should respond, such as displaying
        // a warning dialog onIdleStart, or redirecting to logout page onTImeout, etc.
     /*   this.idle.onIdleStart.subscribe(() => {
            console.log('IdleStart');
            const modalRef =  this.modalService.open(ModalAlertComponent, {backdrop: 'static', keyboard: true, size:"sm" })
            modalRef.componentInstance.alertMessage = "Your session is about to expire."
            modalRef.componentInstance.title = "Warning"
            modalRef.componentInstance.buttonLabel = "Keep me logged in"
        });*/
        this.idle.onIdleEnd.subscribe(() => {
            console.log('IdleEnd');
        });
        this.idle.onTimeoutWarning.subscribe((countdown: number) => {
            console.log('TimeoutWarning: ' + countdown);
        });
        this.idle.onTimeout.subscribe(() => {
            console.log("session timed out - logging out");
            this.logout()
        });
        // start watching for idleness right away.
        this.idle.watch();
    }


    /**
     * delay and subscribe to refresh token for getting the new JWT jus before it expires
     */
    public scheduleRefresh() {

        console.log("scheduleRefresh");

        let source = this.authHttp.tokenStream.flatMap(
            token => {
                let delay = this.getExpirationTimeFrom(token)-this.serverResponseDelay;
                console.log("delay interval: ",delay);
                return Observable.interval(delay);
            });
        this.refreshSubscription = source.subscribe(() => {
            this.refreshToken().then(
                res => {
                    console.log("refreshed token: ", res);
                    this.saveToken(res);
                },
                err =>{
                    console.error("error while refreshing token");
                    this.logout()
                }
            )
        })
    }

    /**
     * run on startup to begin to handle user session
     */
    public startupTokenRefresh() {

        console.log("startupTokenRefresh");
        // If the user is authenticated, use the token stream
        // provided by angular2-jwt and flatMap the token
        let source = this.authHttp.tokenStream.flatMap(
            token => {
                // Get the expiry time to generate
                // a delay in milliseconds
                let now: number = new Date().valueOf();
                let jwtExp: number = this.jwtHelper.decodeToken(token).exp;
                let exp: Date = new Date(0);
                exp.setUTCSeconds(jwtExp);
                let delay: number = exp.valueOf() - now;
                if(delay > this.serverResponseDelay){
                    delay = delay -this.serverResponseDelay
                }else{
                    delay = 0
                }
                console.log("delay timer: ",delay);
                // Use the delay in a timer to
                // run the refresh at the proper time
                return Observable.timer(delay);
            });

        // Once the delay time from above is
        // reached, get a new JWT and schedule
        // additional refreshes
        source.subscribe(() => {
            this.refreshToken().then(
                res => {
                    this.saveToken(res.access_token);
                    console.log(res.access_token);
                    this.saveRefreshToken(res.refresh_token);
                    console.log(res.refresh_token);
                    this.scheduleRefresh();
                },
                err =>{
                    console.error("error when refreshing token");
                    this.logout()
                }
            )

        })

    }

    /**
     * obtain claims from current stored token
     * @returns {json}
     */
    public getClaims(){
        return this.jwtHelper.decodeToken(this.getToken())
    }

    /**
     * get expiration time from token claims
     * @param token
     * @returns {number} expiration in ms
     */
    private getExpirationTimeFrom(token){
        // The delay to generate in this case is the difference
        // between the expiry time and the issued at time
        let jwtIat = this.jwtHelper.decodeToken(token).nbf;
        let jwtExp = this.jwtHelper.decodeToken(token).exp;
        let iat = new Date(0);
        let exp = new Date(0);
        //-2000 ms to give some time for the server to respond before token is invalid
        return exp.setUTCSeconds(jwtExp) - iat.setUTCSeconds(jwtIat)
    }



    /**
     * takes care of refreshing the token
     */
    private refreshToken() { //cambiar
        let loginUrl = this.apiHost + 'token';
        let claims = this.jwtHelper.decodeToken(this.getToken());
        let body = { 'username': claims.unique_name, 'password': claims.iss, 'grant_type': 'password' };

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post(loginUrl, this.undeCodeData(body), options)
            .map(res => res.json()).toPromise();
            
    }

    private undeCodeData(user: any) {
        var p = [];
        for (var key in user) {
            p.push(key + '=' + encodeURIComponent(user[key]));
        }
        return p.join('&');
    }
}