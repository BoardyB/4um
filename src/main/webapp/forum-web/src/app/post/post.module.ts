import {QuillModule} from "ngx-quill";
import {CoreModule} from "../core/core.module";
import {NgModule} from "@angular/core";
import {PostRepository} from "./post-repository";

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CoreModule,
    QuillModule
  ],
  providers: [PostRepository]
})
export class PostModule {
}
