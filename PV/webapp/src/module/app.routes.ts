import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "../component/src/login.component";
import {PreAuthGuard} from "../service/guard/pre-auth-guard.service";
import {HomeComponent} from "../component/src/home.component";
import {JwtGuard} from "../service/guard/jwt-guard.service";


/**
 * Created by chaas003 on 10/10/16.
 */
// Route config let's you map routes to components
const routes: Routes = [
    // map '/home' to the home screen
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [
            PreAuthGuard
        ]
    },
    {
        path: 'pv',
        component: HomeComponent,
        children: [
            { },
            { }
        ],
        canActivate: [
            JwtGuard
        ]
    },

    {
        path: 'token',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    // map '/' to '/login' as our default route
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(routes);
