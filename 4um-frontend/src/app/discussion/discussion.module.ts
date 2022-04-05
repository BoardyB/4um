import { CoreModule } from "../core/core.module";
import { NgModule } from "@angular/core";
import { DiscussionEditorComponent } from "./editor/discussion-editor.component";
import { DiscussionRoutingModule } from "./discussion-routing.module";
import { DiscussionRepository } from "./discussion-repository";
import { QuillModule } from "ngx-quill";
import { DiscussionTableComponent } from "./table/discussion-table.component";
import { DiscussionListComponent } from "./list/discussion-list.component";
import { DiscussionViewerComponent } from "./viewer/discussion-viewer.component";
import { DiscussionResolver } from "./discussion.resolver";
import { PostModule } from "../post/post.module";

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
    QuillModule.forRoot(),
    PostModule
  ],
  providers: [DiscussionRepository, DiscussionResolver]
})
export class DiscussionModule {
}
