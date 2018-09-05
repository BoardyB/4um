import {MaterialModule} from "./material/material.module";
import {NgModule} from "@angular/core";
import {BootstrapModule} from "./bootstrap/bootstrap.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from "./navbar/navbar.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {TRANSLATE_MODULE_CONFIG} from "./translate.config";
import {UserService} from "./user/user-service";
import {CommonModule} from "@angular/common";
import {SafeHtmlPipe} from "./util/safe-html.pipe";
import {AuthenticationService} from "./security/authentication.service";
import {AuthGuard} from "./security/auth.guard";
import {ErrorInterceptor} from "./security/auth.error.interceptor";
import {JwtInterceptor} from "./security/jwt.interceptor";
import {LoginComponent} from "./login/login.component";
import {ToastrModule} from "ngx-toastr";
import {RegisterComponent} from "./register/register.component";

@NgModule({
  declarations: [
    NavbarComponent,
    SafeHtmlPipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BootstrapModule,
    HttpClientModule,
    TranslateModule.forRoot(TRANSLATE_MODULE_CONFIG),
    ToastrModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BootstrapModule,
    NavbarComponent,
    TranslateModule,
    SafeHtmlPipe,
    ToastrModule
  ],
  providers: [
    UserService,
    SafeHtmlPipe,
    AuthenticationService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
})
export class CoreModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
