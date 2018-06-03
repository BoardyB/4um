import {Component, Input} from "@angular/core";
import {Post} from "./post";
import {User} from "../core/user/user";
import {UserService} from "../core/user/user-service";
import {PostRepository} from "./post-repository";

@Component({
  selector: 'forum-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  @Input() posts: Post[];
  private userService: UserService;
  private postRepository: PostRepository;

  constructor(userService: UserService, postRepository: PostRepository) {
    this.userService = userService;
    this.postRepository = postRepository;
  }

  getCreatorOfPost(post: Post): User {
    return this.userService.getUserById(post.creator);
  }

  voteUp(post: Post): void {

  }

  voteDown(post: Post): void {

  }

}
