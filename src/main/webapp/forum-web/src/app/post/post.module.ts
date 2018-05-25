import {QuillModule} from "ngx-quill";
import {CoreModule} from "../core/core.module";
import {NgModule} from "@angular/core";
import {PostRepository} from "./post-repository";
import {PostListComponent} from "./post-list.component";

@NgModule({
  declarations: [PostListComponent],
  exports: [PostListComponent],
  imports: [
    CoreModule,
    QuillModule
  ],
  providers: [PostRepository]
})
export class PostModule {
}
