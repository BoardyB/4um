import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Post} from "./post";
import {isPresent} from "../core/util/util";
import {User} from "../core/user/user";
import {UserService} from "../core/user/user-service";
import {PostRepository} from "./post-repository";
import {Discussion} from "../discussion/discussion";

@Component({
  selector: 'forum-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {
  @Input() post: Post;
  @Input() discussion: Discussion;
  @Output() saved: EventEmitter<Post> = new EventEmitter<Post>();
  discussionCreator: User;
  private userService: UserService;
  private postRepository: PostRepository;

  constructor(userService: UserService, postRepository: PostRepository) {
    this.userService = userService;
    this.postRepository = postRepository;
  }

  ngOnInit(): void {
    if (!isPresent(this.post)) {
      this.post = Post.createEmptyPost();
    }
    this.discussionCreator = this.userService.getUserById(this.post.creator);
  }

  reset(): void {
    this.post = Post.createEmptyPost();
  }

  save(): void {
    this.post.discussionId = this.discussion.getId();
    this.postRepository.save(this.post).subscribe(response => {
      this.saved.emit(this.post);
      this.reset();
    });
  }
}
