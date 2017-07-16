"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("../component/src/login.component");
var pre_auth_guard_service_1 = require("../service/guard/pre-auth-guard.service");
var home_componet_1 = require("../component/src/home.componet");
var project_list_component_1 = require("../component/src/project-list.component");
var jwt_guard_service_1 = require("../service/guard/jwt-guard.service");
var project_imports_component_1 = require("../component/src/project-imports.component");
var import_history_component_1 = require("../component/src/import-history.component");
var product_componet_1 = require("../component/src/product.componet");
var customer_componet_1 = require("../component/src/customer.componet");
var customer_usage_component_1 = require("../component/src/customer-usage.component");
var contracts_component_1 = require("../component/src/contracts.component");
var price_comparison_component_1 = require("../component/src/price-comparison.component");
var customer_facing_componet_1 = require("../component/src/customer-facing.componet");
/**
 * Created by chaas003 on 10/10/16.
 */
// Route config let's you map routes to components
var routes = [
    // map '/home' to the home screen
    {
        path: 'route/login',
        component: login_component_1.LoginComponent,
        canActivate: [
            pre_auth_guard_service_1.PreAuthGuard
        ]
    },
    {
        path: 'route',
        component: home_componet_1.HomeComponent,
        children: [
            { path: 'projects', component: project_list_component_1.ProjectListComponent },
            { path: 'projects/:id/imports', component: project_imports_component_1.ProjectImportsComponent },
            { path: 'projects/:id/imports/history', component: import_history_component_1.ImportHistoryComponent },
            { path: 'projects/:id/imports/customer', component: customer_componet_1.CustomerComponent },
            { path: 'projects/:id/imports/product', component: product_componet_1.ProductComponent },
            { path: 'projects/:id/imports/customerUsage', component: customer_usage_component_1.CustomerUsageComponent },
            { path: 'projects/:id/imports/contract', component: contracts_component_1.ContractsComponent },
            { path: 'projects/:id/imports/usage-analysis', component: price_comparison_component_1.PriceComparisonComponent },
            { path: 'projects/:id/imports/customer-facing', component: customer_facing_componet_1.CustomerFacingComponent },
            { path: 'programs/:id', component: project_imports_component_1.ProjectImportsComponent },
            { path: 'programs/:id/history', component: import_history_component_1.ImportHistoryComponent },
            { path: '', redirectTo: 'projects', pathMatch: 'full' }
        ],
        canActivate: [
            jwt_guard_service_1.JwtGuard
        ]
    },
    {
        path: 'j_spring_security_logout',
        redirectTo: 'route/login',
        pathMatch: 'full'
    },
    // map '/' to '/login' as our default route
    {
        path: '',
        redirectTo: 'route/login',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
