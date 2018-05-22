import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DiscussionEditorComponent} from "./discussion-editor.component";

const routes: Routes = [
  {
    path: '',
    component: DiscussionEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscussionRoutingModule { }
