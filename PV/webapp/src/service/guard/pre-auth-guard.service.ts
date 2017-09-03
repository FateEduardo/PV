import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {HomeComponent} from "../../component/src/home.component";
import {JwtService} from "../jwt.service";
import {ApiService} from "../api.service";

/**
 * 
 
 * purpose of this guard is to redirect user to home page if it's pre-authenticated
 */
@Injectable()
export class PreAuthGuard implements CanActivate {

    tokenResult: string;
    errorMessage: string;
    loggedIn:boolean = false;

    constructor(private apiService: ApiService, private router : Router,private jwtService:JwtService){}
    canActivate() : Promise<boolean> {
        return this.apiService.isPreAuthenticated().then((res) => {
            console.info("user is pre-authenticated",res)
            this.jwtService.saveToken(res);
            alert("entro")
          //  this.router.navigate(['/pv'], HomeComponent);
            return false;
        }).catch((ex) => {
            //its ok to fail on development
            return true;
        })
    }
}
