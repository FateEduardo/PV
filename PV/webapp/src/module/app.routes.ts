import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "../component/src/login.component";
import {PreAuthGuard} from "../service/guard/pre-auth-guard.service";
import {HomeComponent} from "../component/src/home.component";
import {ProductListComponent} from "../component/src/producto-list.component";



/**
 * Created by chaas003 on 10/10/16.
 */
// Route config let's you map routes to components
const routes: Routes = [
    // map '/home' to the home screen
    {
        path: 'pv/login',
        component: LoginComponent,
        canActivate: [
            PreAuthGuard
        ]
    },
    {
        path: 'pv',
        component: HomeComponent,
        children: [
            {path:'ticket', component: ProductListComponent}
        ],
      
    },

    {
        path: 'logout',
        redirectTo: 'pv/login',
        pathMatch: 'full'
    },
    // map '/' to '/login' as our default route
    {
        path: '',
        redirectTo: 'pv/login',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(routes);
