import {Inject, Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

import {Router} from "@angular/router";
import {JwtService} from "./jwt.service";
import {HomeComponent} from "../component/src/home.component";
import {ProductListComponent} from "../component/src/producto-list.component";
/**
 * Created by chaas003 on 10/5/16.
 */
@Injectable()
export class LoginService {

 

    constructor (private http: Http, private router : Router, @Inject('API_HOST') private apiHost: string,
                 private jwtService:JwtService) {

        jwtService.removeToken();
    }


    authenticateUser(user:any){
        let loginUrl = this.apiHost + 'token';

        let body = { 'username': user.userName, 'password': user.password, 'grant_type': 'password' };

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post(loginUrl, this.undeCodeData(body), options)
           .map(response => response.json())
           .subscribe(
            token => {
                this.jwtService.saveToken(token.access_token);
                this.jwtService.setRefreshToken(token.refresh_token);
                console.log(this.jwtService.getToken());
                console.log(this.jwtService.getRefreshToken());
                this.router.navigate(['pv/ticket'], ProductListComponent);
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