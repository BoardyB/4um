import {CoreModule} from "../core/core.module";
import {NgModule} from "@angular/core";
import {DiscussionEditorComponent} from "./discussion-editor.component";
import {DiscussionRoutingModule} from "./discussion-routing.module";
import {DiscussionRepository} from "./discussion-repository";
import {QuillModule} from "ngx-quill";
import {DiscussionTableComponent} from "./discussion-table.component";
import {DiscussionListComponent} from "./discussion-list.component";
import {DiscussionViewerComponent} from "./discussion-viewer.component";
import {DiscussionResolver} from "./discussion.resolver";
import {PostModule} from "../post/post.module";

@NgModule({
  declarations: [
    DiscussionEditorComponent,
    DiscussionTableComponent,
    DiscussionListComponent,
    DiscussionViewerComponent
  ],
  exports: [
    DiscussionEditorComponent,
    DiscussionTableComponent,
    DiscussionListComponent,
    DiscussionViewerComponent
  ],
  imports: [
    CoreModule,
    DiscussionRoutingModule,
    QuillModule,
    PostModule
  ],
  providers: [DiscussionRepository, DiscussionResolver]
})
export class DiscussionModule {
}
