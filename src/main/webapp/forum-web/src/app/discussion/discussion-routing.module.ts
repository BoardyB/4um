import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DiscussionEditorComponent} from "./discussion-editor.component";
import {DiscussionTableComponent} from "./discussion-table.component";
import {DiscussionViewerComponent} from "./discussion-viewer.component";
import {DiscussionResolver} from "./discussion.resolver";

const routes: Routes = [
  {
    path: 'new',
    component: DiscussionEditorComponent
  },
  {
    path: 'all',
    component: DiscussionTableComponent
  },
  {
    path: ':id',
    component: DiscussionViewerComponent,
    resolve: {
      discussion: DiscussionResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscussionRoutingModule {
}
