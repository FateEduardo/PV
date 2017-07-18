import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {provideAuth, JwtHelper} from "angular2-jwt";
import {SimpleExpiry} from "ng2-idle/simpleexpiry";
import {FileSelectDirective} from 'ng2-file-upload';
import { NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import {AppComponent} from "../component/src/app.component";
import {LoginComponent} from "../component/src/login.component";
import {HomeComponent} from "../component/src/home.component";
import {routing} from "./app.routes";
import {JwtService} from "../service/jwt.service"
import {JwtGuard} from "../service/guard/jwt-guard.service"
import {PreAuthGuard} from "../service/guard/pre-auth-guard.service"
import {IdleExt} from "../util/idle-ext";
import {ApiService } from  "../service/api.service"

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        NgbModule.forRoot(),
        NgbTypeaheadModule.forRoot(),
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent
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
            headerName: "X-AUTH-TOKEN",
            noTokenScheme: true,
            tokenGetter: (() => sessionStorage.getItem("id_token"))
        })    
        
    ]

})
export class AppModule { }
