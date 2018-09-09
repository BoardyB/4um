import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./core/login/login.component";
import {AuthGuard} from "./core/security/auth.guard";
import {RegisterComponent} from "./core/register/register.component";

const routes: Routes = [
  {
    path: 'discussion',
    loadChildren: './discussion/discussion.module#DiscussionModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'post',
    loadChildren: './post/post.module#PostModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: './core/user/user.module#UserModule',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
