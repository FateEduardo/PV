import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {JwtService} from "../jwt.service";

/**
 * guards for valid jwt
 */
@Injectable()
export class JwtGuard implements CanActivate {

    constructor( private jwtService: JwtService,private router : Router) {}

    /**
     * if valid jwt perform session handling operations
     * @returns {boolean}
     */
    canActivate() {
        if(this.jwtService.isValidToken()) {
            this.jwtService.startupTokenRefresh();
            this.jwtService.watchIdle();
            this.router.navigate(['pv/otro']);
            return true;
        } else {
            this.router.navigate(['pv/otro']);
            alert("no paso")
            return false;
        }
    }
}