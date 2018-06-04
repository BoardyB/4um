import {QuillModule} from "ngx-quill";
import {CoreModule} from "../core/core.module";
import {NgModule} from "@angular/core";
import {PostRepository} from "./post-repository";
import {PostListComponent} from "./post-list.component";
import {PostEditorComponent} from "./post-editor.component";

@NgModule({
  declarations: [
    PostListComponent,
    PostEditorComponent
  ],
  exports: [
    PostListComponent,
    PostEditorComponent
  ],
  imports: [
    CoreModule,
    QuillModule
  ],
  providers: [PostRepository]
})
export class PostModule {
}
