import {Injectable, Inject} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {JwtService} from "./jwt.service";
import {User} from "../component/src/login.component";
import {HomeComponent} from "../component/src/home.componet";

/**
 * Created by chaas003 on 10/5/16.
 */
@Injectable()
export class LoginService {

    private token:String;

    constructor (private http: Http, private router : Router, @Inject('API_HOST') private apiHost: string,
                 private jwtService:JwtService) {

        jwtService.removeToken();
    }


    authenticateUser(user:User){
        let loginUrl = this.apiHost + 'auth';

        let body = { 'username': user.userName, 'password': user.password, 'grant_type': 'password' };

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post(loginUrl, this.undeCodeData(body), options)
           .map(response => response.text())
           .subscribe(
               token => {
                   console.debug('token: ' + token);
                   this.jwtService.saveToken(token);
                   this.router.navigate(['route/projects'], HomeComponent);//cambiar
               },
               this.handleError,
               () => console.log('Authentication Complete')
           );

    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? error.status + ' - ' + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    private undeCodeData(user: any) {
        var p = [];
        for (var key in user) {
            p.push(key + '=' + encodeURIComponent(user[key]));
        }
        return p.join('&');
    }

}