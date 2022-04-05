import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./core/login/login.component";
import { AuthGuard } from "./core/security/auth.guard";
import { RegisterComponent } from "./core/register/register.component";

const routes: Routes = [
  {
    path: 'discussion',
    loadChildren: () => import('./discussion/discussion.module').then(x => x.DiscussionModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then(x => x.PostModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./core/user/user.module').then(x => x.UserModule),
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
export class AppRoutingModule {
}
