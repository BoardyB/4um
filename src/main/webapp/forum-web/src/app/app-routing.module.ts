import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'discussion',
    loadChildren: './discussion/discussion.module#DiscussionModule'
  },
  {
    path: '',
    redirectTo: 'discussion/all',
    pathMatch: 'full'
  },
  {
    path: 'post',
    loadChildren: './post/post.module#PostModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
