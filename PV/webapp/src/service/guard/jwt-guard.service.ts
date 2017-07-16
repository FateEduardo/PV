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
            this.jwtService.startupTokenRefresh()
            this.jwtService.watchIdle()
            return true;
        } else {
            this.router.navigate(['route/login']);
            return false;
        }
    }
}