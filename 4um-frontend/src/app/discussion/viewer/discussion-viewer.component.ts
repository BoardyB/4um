import { Component, OnInit } from "@angular/core";
import { Discussion } from "../discussion";
import { Post } from "../../post/post";
import { PostRepository } from "../../post/post-repository";
import { ActivatedRoute } from "@angular/router";
import { isPresent } from "../../core/util/util";
import { UserService } from "../../core/user/user-service";
import { User } from "../../core/user/user";

@Component({
  selector: 'forum-discussion-viewer',
  templateUrl: './discussion-viewer.component.html',
  styleUrls: ['./discussion-viewer.component.scss']
})
export class DiscussionViewerComponent implements OnInit {
  discussion: Discussion;
  posts: Post[] = [];
  discussionCreator: User;
  dataLoaded: boolean = false;
  private postRepository: PostRepository;
  private route: ActivatedRoute;
  private userService: UserService;

  constructor(postRepository: PostRepository, route: ActivatedRoute, userService: UserService) {
    this.postRepository = postRepository;
    this.route = route;
    this.userService = userService;
  }

  ngOnInit(): void {
    this.initializeDiscussion();
    this.initializePosts();

    this.userService.getUserById(this.discussion.creator).subscribe((user: User) => {
      this.discussionCreator = user;
      this.dataLoaded = true;
    });
  }

  private initializeDiscussion() {
    const loadedDiscussion = this.route.snapshot.data['discussion'];
    if (isPresent(loadedDiscussion)) {
      this.discussion = Discussion.deserialize(loadedDiscussion);
    }
  }

  public initializePosts() {
    this.posts = [];
    this.postRepository.findByDiscussion(this.discussion.getId()).subscribe((response: any) => {
      response.forEach((data: any) => this.posts.push(Post.deserialize(data)));
    });
  }
}
