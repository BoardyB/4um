import {NgModule} from "@angular/core";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {CoreModule} from "../core.module";
import {UserResolver} from "./user.resolver";
import {UserRoutingModule} from "./user-routing.module";

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [CoreModule, UserRoutingModule],
  exports: [UserDetailsComponent],
  providers: [UserResolver]
})
export class UserModule {
}
