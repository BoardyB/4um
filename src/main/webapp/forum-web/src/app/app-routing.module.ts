import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./core/login/login.component";
import {AuthGuard} from "./core/security/auth.guard";

const routes: Routes = [
  {
    path: 'discussion',
    loadChildren: './discussion/discussion.module#DiscussionModule',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'discussion/all',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'post',
    loadChildren: './post/post.module#PostModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
