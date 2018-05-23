import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DiscussionEditorComponent} from "./discussion-editor.component";
import {DiscussionTableComponent} from "./discussion-table.component";

const routes: Routes = [
  {
    path: '',
    component: DiscussionEditorComponent
  },
  {
    path: 'all',
    component: DiscussionTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscussionRoutingModule { }
