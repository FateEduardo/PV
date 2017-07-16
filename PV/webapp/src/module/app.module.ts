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
import {routing} from "./app.routes";

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
        AppComponent
    ],
    entryComponents: [
     
    ],
    bootstrap: [AppComponent],

    providers: [
        //PTT constants
        { provide: 'API_HOST', useValue: app.environment === 'development' ? 'http://localhost:8282/ptt-app/' : '/ptt-app/' },
        //Project Stages constants
		
    //PTT services
        ApiService, JwtHelper, JwtService, ValidationService, FileAuditService, ClientPaginationService,
        FormatService, AlertService, DownloadService, PageableRequestHandler, CommonsService,
    //PTT guards
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
