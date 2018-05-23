import {CoreModule} from "../core/core.module";
import {NgModule} from "@angular/core";
import {DiscussionEditorComponent} from "./discussion-editor.component";
import {DiscussionRoutingModule} from "./discussion-routing.module";
import {DiscussionRepository} from "./discussion-repository";
import {QuillModule} from "ngx-quill";
import {DiscussionTableComponent} from "./discussion-table.component";

@NgModule({
  declarations: [
    DiscussionEditorComponent,
    DiscussionTableComponent
  ],
  exports: [
    DiscussionEditorComponent,
    DiscussionTableComponent
  ],
  imports: [
    CoreModule,
    DiscussionRoutingModule,
    QuillModule
  ],
  providers: [DiscussionRepository]
})
export class DiscussionModule {
}
