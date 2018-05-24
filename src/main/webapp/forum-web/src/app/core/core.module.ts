import {MaterialModule} from "./material/material.module";
import {NgModule} from "@angular/core";
import {BootstrapModule} from "./bootstrap/bootstrap.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from "./navbar/navbar.component";
import {HttpClientModule} from "@angular/common/http";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {TRANSLATE_MODULE_CONFIG} from "./translate.config";
import {UserService} from "./user/user-service";
import {CommonModule} from "@angular/common";
import {SafeHtmlPipe} from "./util/safe-html.pipe";

@NgModule({
  declarations: [
    NavbarComponent,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BootstrapModule,
    HttpClientModule,
    TranslateModule.forRoot(TRANSLATE_MODULE_CONFIG)
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BootstrapModule,
    NavbarComponent,
    TranslateModule,
    SafeHtmlPipe
  ],
  providers: [
    UserService,
    SafeHtmlPipe
  ]
})
export class CoreModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
