import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DiscussionEditorComponent} from "../../discussion/discussion-editor.component";
import {DiscussionTableComponent} from "../../discussion/discussion-table.component";
import {DiscussionResolver} from "../../discussion/discussion.resolver";
import {DiscussionViewerComponent} from "../../discussion/discussion-viewer.component";
import {AuthGuard} from "../security/auth.guard";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {UserResolver} from "./user.resolver";

const routes: Routes = [
  {
    path: 'edit/:id',
    component: UserDetailsComponent,
    resolve: {
      user: UserResolver
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'view/:id',
    component: UserDetailsComponent,
    resolve: {
      user: UserResolver
    },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {

}
