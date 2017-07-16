import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "../component/src/login.component";
import {PreAuthGuard} from "../service/guard/pre-auth-guard.service";
import {HomeComponent} from "../component/src/home.componet";
import {JwtGuard} from "../service/guard/jwt-guard.service";


/**
 * Created by chaas003 on 10/10/16.
 */
// Route config let's you map routes to components
const routes: Routes = [
    // map '/home' to the home screen
    {
        path: 'route/login',
        component: LoginComponent,
        canActivate: [
            PreAuthGuard
        ]
    },
    {
        path: 'route',
        component: HomeComponent,
        children: [
            { path: 'menu', component: MenuComponent},
            { path: '', redirectTo: 'menu', pathMatch: 'full' }
        ],
        canActivate: [
            JwtGuard
        ]
    },

    {
        path: 'token',
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

export const routing = RouterModule.forRoot(routes);
