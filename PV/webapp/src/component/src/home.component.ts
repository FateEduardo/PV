import {Component, OnInit} from "@angular/core";
//import {BreadcrumbService} from "../util/breadcrumb.service";
import {ApiService} from "../../service/api.service";
import {JwtService} from "../../service/jwt.service";



@Component({
    template: require('../template/home.component.html'),
    providers: [ApiService]
})
export class HomeComponent implements OnInit {
   // staplesLogo = '/pv-app/' + staplesLogo;
    claims = null;

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

        // See https://www.npmjs.com/package/ng2-breadcrumb for configuration information
      /*  this.breadcrumbService.hideRoute('/route');

        this.breadcrumbService.addFriendlyNameForRoute('/route/projects', 'Acquisition Projects');
        this.breadcrumbService.hideRouteRegex('^/route/projects/[0-9]+$')
        this.breadcrumbService.addCallbackForRouteRegex('/route/projects/[0-9]+/imports', this.getProjectName);
        this.breadcrumbService.addFriendlyNameForRouteRegex('/route/projects/[0-9]+/imports/history', 'Import History');
        this.breadcrumbService.addFriendlyNameForRouteRegex('/route/projects/[0-9]+/imports/customer', 'Customer Cross Reference');
        this.breadcrumbService.addFriendlyNameForRouteRegex('/route/projects/[0-9]+/imports/product', 'Product Cross Reference');
        this.breadcrumbService.addFriendlyNameForRouteRegex('/route/projects/[0-9]+/imports/customerUsage', 'Customer Usage');
        this.breadcrumbService.addFriendlyNameForRouteRegex('/route/projects/[0-9]+/imports/contract', 'Contracts');
        this.breadcrumbService.addFriendlyNameForRouteRegex('/route/projects/[0-9]+/imports/usage-analysis', 'Usage Analysis');
        this.breadcrumbService.addFriendlyNameForRouteRegex('/route/projects/[0-9]+/imports/customer-facing', 'Customer Facing');

        this.breadcrumbService.hideRoute('/route/programs');
        this.breadcrumbService.addFriendlyNameForRoute('/route/programs/0', 'Program Prices');
        this.breadcrumbService.addFriendlyNameForRouteRegex('/route/programs/[0-9]+/history', 'Import History');*/
    }

    public logout(event): void {
        event.preventDefault();

        event.stopPropagation();
        this.jwtService.logout();
    }

   
}
