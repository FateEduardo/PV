import {Component, OnInit} from "@angular/core";
//import {BreadcrumbService} from "../util/breadcrumb.service";
import {ApiService} from "../../service/api.service";
import {JwtService} from "../../service/jwt.service";

/**
 * Created by chaas003 on 10/7/16.
 */

@Component({
    template: require('../template/home.component.html'),
    providers: [ApiService]
})
export class HomeComponent implements OnInit {
   // staplesLogo = '/pv-app/' + staplesLogo;
    claims = null;
    
    imagePath = require("../../asset/img/logo.jpg");
    /**
     * Constructor
     *
     * @param apiService
     * @param jwtService
     * @param breadcrumbService
     */
    constructor(private apiService: ApiService, private jwtService: JwtService) {
    }

    /**
     * Configure the Breadcrumb
     */
    public ngOnInit() {
        this.claims = this.jwtService.getClaims();
    }

    public logout(event): void {
        event.preventDefault();

        event.stopPropagation();
        this.jwtService.logout();
    }

   
}