import {MaterialModule} from "./material/material.module";
import {NgModule} from "@angular/core";
import {BootstrapModule} from "./bootstrap/bootstrap.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NavbarComponent} from "./navbar/navbar.component";
import {HttpClientModule} from "@angular/common/http";
import {TranslateModule} from "@ngx-translate/core";
import {TRANSLATE_MODULE_CONFIG} from "./translate.config";

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BootstrapModule,
    HttpClientModule,
    TranslateModule.forRoot(TRANSLATE_MODULE_CONFIG)
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BootstrapModule,
    NavbarComponent,
    TranslateModule
  ],
  providers: []
})
export class CoreModule {
}
