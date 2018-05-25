import {Component, OnInit} from "@angular/core";
import {Discussion} from "./discussion";
import {Post} from "../post/post";
import {PostRepository} from "../post/post-repository";
import {ActivatedRoute} from "@angular/router";
import {isPresent} from "../core/util/util";

@Component({
  selector: 'forum-discussion-viewer',
  templateUrl: './discussion-viewer.component.html',
  styleUrls: ['./discussion-viewer.component.scss']
})
export class DiscussionViewerComponent implements OnInit {

  discussion: Discussion;
  posts: Post[] = [];
  private postRepository: PostRepository;
  private route: ActivatedRoute;

  constructor(postRepository: PostRepository, route: ActivatedRoute) {
    this.postRepository = postRepository;
    this.route = route;
  }

  ngOnInit(): void {
    this.initializeDiscussion();
    this.initializePosts();
  }

  private initializeDiscussion() {
    const loadedDiscussion = this.route.snapshot.data.discussion;
    if (isPresent(loadedDiscussion)) {
      this.discussion = Discussion.deserialize(loadedDiscussion);
    }
  }

  private initializePosts() {
    this.postRepository.findByDiscussion(this.discussion.getId()).subscribe(response => {
      this.posts = this.postRepository.deserializeFromList(response);
    });
  }
}
