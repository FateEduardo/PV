import {Component} from "@angular/core";
import {LoginService} from "../../service/login.service";


/**
 * Created by chaas003 on 10/3/16.
 */
export class User{
    username: string;
    password: string;
}

@Component({
    template: require('../template/login.component.html'),
    providers: [LoginService]
})


export class LoginComponent {

    constructor( private loginService : LoginService){}

    user: User = new User;

    public login() {
  	    console.log('authenticating: ' + JSON.stringify(this.user));

        this.loginService.authenticateUser(this.user);
  	}

}
