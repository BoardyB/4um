import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscussionEditorComponent } from "./editor/discussion-editor.component";
import { DiscussionTableComponent } from "./table/discussion-table.component";
import { DiscussionViewerComponent } from "./viewer/discussion-viewer.component";
import { DiscussionResolver } from "./discussion.resolver";
import { AuthGuard } from "../core/security/auth.guard";

const routes: Routes = [
  {
    path: 'new',
    component: DiscussionEditorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:id',
    component: DiscussionEditorComponent,
    resolve: {
      discussion: DiscussionResolver
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'all',
    component: DiscussionTableComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: DiscussionViewerComponent,
    resolve: {
      discussion: DiscussionResolver
    },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscussionRoutingModule {
}
