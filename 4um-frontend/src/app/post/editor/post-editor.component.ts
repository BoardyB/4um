import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Post } from "../post";
import { User } from "../../core/user/user";
import { UserService } from "../../core/user/user-service";
import { PostRepository } from "../post-repository";
import { isPresent } from "../../core/util/util";

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
  dataLoaded: boolean = false;
  toolbar = [['bold', 'italic', 'underline', {color: [] as string[]}, {header: [1, 2, 3, 4, false]}]];
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
      this.userService.getUserById(this.post.creator).subscribe((user: User) => {
        this.discussionCreator = user;
        this.dataLoaded = true;
      });
    } else {
      const currentUserId = this.userService.getCurrentUserId();
      this.userService.getUserById(currentUserId).subscribe((user: User) => {
        this.discussionCreator = user;
        this.dataLoaded = true;
      });
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
