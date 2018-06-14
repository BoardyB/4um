import {Component, EventEmitter, Input, Output, ViewChild} from "@angular/core";
import {Post} from "./post";
import {User} from "../core/user/user";
import {UserService} from "../core/user/user-service";
import {PostRepository} from "./post-repository";
import {ResponseMessage} from "../core/response/response-message";
import {DiscussionRepository} from "../discussion/discussion-repository";
import {PostEditorModalComponent} from "./post-editor-modal.component";

@Component({
  selector: 'forum-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  @Input() posts: Post[];
  @Output() dataChanged: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(PostEditorModalComponent) editorModal: PostEditorModalComponent;
  currentUserId: string;
  private userService: UserService;
  private postRepository: PostRepository;
  private discussionRepository: DiscussionRepository;

  constructor(userService: UserService, postRepository: PostRepository, discussionRepository: DiscussionRepository) {
    this.userService = userService;
    this.postRepository = postRepository;
    this.discussionRepository = discussionRepository;
    this.currentUserId = this.userService.getCurrentUserId();
  }

  getCreatorOfPost(post: Post): User {
    return this.userService.getUserById(post.creator);
  }

  voteUp(post: Post): void {
    if (!post.userUpvoted(this.currentUserId)) {
      this.postRepository.vote(post, true).subscribe(response => {
        const responseMessage = ResponseMessage.deserialize(response, Post);
        this.dataChanged.emit(responseMessage.responseBody);
      });
    }
  }

  voteDown(post: Post): void {
    if (!post.userDownvoted(this.currentUserId)) {
      this.postRepository.vote(post, false).subscribe(response => {
        const responseMessage = ResponseMessage.deserialize(response, Post);
        this.dataChanged.emit(responseMessage.responseBody);
      });
    }
  }

  edit(post: Post): void {
    this.editorModal.openModal(post, post.discussionId);
  }

  delete(post: Post): void {
    this.postRepository.delete(post).subscribe(data => {
      this.dataChanged.emit(data.responseBody);
    });
  }

  editCompleted(post: Post): void {
    this.dataChanged.emit(post);
  }

}
