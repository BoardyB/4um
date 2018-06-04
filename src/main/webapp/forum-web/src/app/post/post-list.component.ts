import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Post} from "./post";
import {User} from "../core/user/user";
import {UserService} from "../core/user/user-service";
import {PostRepository} from "./post-repository";
import {ResponseMessage} from "../core/response/response-message";

@Component({
  selector: 'forum-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  @Input() posts: Post[];
  @Output() voted: EventEmitter<Post> = new EventEmitter<Post>();
  currentUserId: string;
  private userService: UserService;
  private postRepository: PostRepository;

  constructor(userService: UserService, postRepository: PostRepository) {
    this.userService = userService;
    this.postRepository = postRepository;
    this.currentUserId = this.userService.getCurrentUserId();
  }

  getCreatorOfPost(post: Post): User {
    return this.userService.getUserById(post.creator);
  }

  voteUp(post: Post): void {
    if (!post.userUpvoted(this.currentUserId)) {
      this.postRepository.vote(post, true).subscribe(response => {
        const responseMessage = ResponseMessage.deserialize(response, Post);
        this.voted.emit(responseMessage.responseBody);
      });
    }
  }

  voteDown(post: Post): void {
    if (!post.userDownvoted(this.currentUserId)) {
      this.postRepository.vote(post, false).subscribe(response => {
        const responseMessage = ResponseMessage.deserialize(response, Post);
        this.voted.emit(responseMessage.responseBody);
      });
    }
  }

}
