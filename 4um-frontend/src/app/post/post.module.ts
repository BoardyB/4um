import { QuillModule } from "ngx-quill";
import { CoreModule } from "../core/core.module";
import { NgModule } from "@angular/core";
import { PostRepository } from "./post-repository";
import { PostListComponent } from "./list/post-list.component";
import { PostEditorComponent } from "./editor/post-editor.component";
import { PostEditorModalComponent } from "./editor/post-editor-modal.component";

@NgModule({
  declarations: [
    PostListComponent,
    PostEditorComponent,
    PostEditorModalComponent
  ],
  exports: [
    PostListComponent,
    PostEditorComponent,
    PostEditorModalComponent
  ],
  imports: [
    CoreModule,
    QuillModule.forRoot()
  ],
  providers: [PostRepository]
})
export class PostModule {
}
