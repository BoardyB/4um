import {MaterialModule} from "./material/material.module";
import {NgModule} from "@angular/core";
import {BootstrapModule} from "./bootstrap/bootstrap.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NavbarComponent} from "./navbar/navbar.component";
import {HttpClientModule} from "@angular/common/http";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {TRANSLATE_MODULE_CONFIG} from "./translate.config";
import {UserService} from "./user/user-service";
import {DiscussionModule} from "../discussion/discussion.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BootstrapModule,
    HttpClientModule,
    TranslateModule.forRoot(TRANSLATE_MODULE_CONFIG)
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BootstrapModule,
    NavbarComponent,
    TranslateModule
  ],
  providers: [
    UserService
  ]
})
export class CoreModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
