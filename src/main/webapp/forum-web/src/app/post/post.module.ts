import {QuillModule} from "ngx-quill";
import {CoreModule} from "../core/core.module";
import {NgModule} from "@angular/core";
import {PostRepository} from "./post-repository";
import {PostListComponent} from "./post-list.component";
import {PostEditorComponent} from "./post-editor.component";
import {PostEditorModalComponent} from "./post-editor-modal.component";

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
    QuillModule
  ],
  providers: [PostRepository]
})
export class PostModule {
}
