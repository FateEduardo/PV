"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var angular2_jwt_1 = require("angular2-jwt");
var simpleexpiry_1 = require("ng2-idle/simpleexpiry");
var ng2_file_upload_1 = require('ng2-file-upload');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                NgbTypeaheadModule.forRoot(),
                routing
            ],
            declarations: [
                AppComponent,
                LoginComponent,
                HomeComponent,
                ProjectListComponent,
                ProjectImportsComponent,
                CreateAcquisitionProjectComponent,
                ImportHistoryComponent,
                UploadFileComponent,
                ModalAlertComponent,
                ApplyCustomerDiscountComponent,
                ModalConfirmationComponent,
                BreadcrumbComponent,
                ng2_file_upload_1.FileSelectDirective,
                ProductComponent,
                CustomerComponent,
                CustomerUsageComponent,
                ContractsComponent,
                PriceComparisonComponent,
                UsageAnalysisInitiateComponent,
                PitemQheaderInitiateComponent,
                CustomerFacingComponent
            ],
            entryComponents: [
                CreateAcquisitionProjectComponent,
                UploadFileComponent,
                ModalAlertComponent,
                ApplyCustomerDiscountComponent,
                ModalConfirmationComponent,
                UsageAnalysisInitiateComponent,
                PitemQheaderInitiateComponent
            ],
            bootstrap: [AppComponent],
            providers: [
                //PTT constants
                { provide: 'API_HOST', useValue: app.environment === 'development' ? 'http://localhost:8282/ptt-app/' : '/ptt-app/' },
                //Project Stages constants
                ProjectStage,
                //PTT services
                ApiService, angular2_jwt_1.JwtHelper, JwtService, ValidationService, FileAuditService, ClientPaginationService,
                FormatService, AlertService, DownloadService, PageableRequestHandler, CommonsService,
                //PTT guards
                PreAuthGuard, JwtGuard,
                //ng2-idle dependencies
                IdleExt, simpleexpiry_1.SimpleExpiry,
                // Breadcrumb service
                BreadcrumbService,
                //angular-jwt configuration
                angular2_jwt_1.provideAuth({
                    headerName: "X-AUTH-TOKEN",
                    noTokenScheme: true,
                    tokenGetter: (function () { return sessionStorage.getItem("id_token"); })
                })
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
