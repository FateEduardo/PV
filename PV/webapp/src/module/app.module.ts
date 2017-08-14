import {NgModule} from "@angular/core";
import {NgIdleModule} from "@ng-idle/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {NgbModule, NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {JwtHelper, provideAuth} from "angular2-jwt";
import {AppComponent} from "../component/src/app.component";
import {LoginComponent} from "../component/src/login.component";
import {HomeComponent} from "../component/src/home.component";
import {ProductListComponent} from "../component/src/producto-list.component";
import {routing} from "./app.routes";
import {JwtService} from "../service/jwt.service";
import {JwtGuard} from "../service/guard/jwt-guard.service";

import {PreAuthGuard} from "../service/guard/pre-auth-guard.service";
import {IdleExt} from "../util/idle-ext";
import {ApiService} from "../service/api.service";
import {CommonModule} from "@angular/common";
import {SimpleExpiry} from "@ng-idle/core";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CommonModule,
        JsonpModule,
        NgbModule.forRoot(),
        NgbTypeaheadModule.forRoot(),
        NgIdleModule.forRoot(),
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        ProductListComponent
    ],
    entryComponents: [
     
    ],
    bootstrap: [AppComponent],

    providers: [
        //pv constants
        { provide: 'API_HOST', useValue: app.environment === 'development' ? 'http://localhost:55679/pv/' : '/pv-app/' },
        //Project Stages constants
		
    //pv services
        ApiService, JwtHelper, JwtService,
    //pv guards
        PreAuthGuard, JwtGuard,
    //ng2-idle dependencies
        IdleExt, SimpleExpiry,
    // Breadcrumb service
        
        //angular-jwt configuration
        provideAuth({
            tokenGetter: (() => sessionStorage.getItem("id_token"))
        })    
        
    ]

})
export class AppModule { }
