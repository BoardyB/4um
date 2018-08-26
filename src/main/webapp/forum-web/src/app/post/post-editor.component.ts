import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Post} from "./post";
import {isPresent} from "../core/util/util";
import {User} from "../core/user/user";
import {UserService} from "../core/user/user-service";
import {PostRepository} from "./post-repository";

@Component({
  selector: 'forum-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {
  @Input() post: Post;
  @Input() discussionId: string;
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
    if (isPresent(this.post.creator)) {
      this.discussionCreator = this.userService.getUserById(this.post.creator);
    } else {
      this.discussionCreator = this.userService.getUserById(this.userService.getCurrentUserId());
    }

  }

  reset(): void {
    this.post = Post.createEmptyPost();
  }

  save(): void {
    this.post.discussionId = this.discussionId;
    this.postRepository.save(this.post).subscribe(response => {
      this.saved.emit(this.post);
      this.reset();
    });
  }
}
