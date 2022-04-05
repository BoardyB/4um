import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Repository } from "../core/repository/repository";
import { Post } from "./post";

@Injectable()
export class PostRepository extends Repository<Post, string> {

  constructor(httpClient: HttpClient) {
    super('forum/post', httpClient, Post);
  }

  findByDiscussion(discussionId: string): any {
    return this.httpClient.get(this.baseUrl + '/discussion/' + discussionId);
  }

  vote(post: Post, isUpvote: boolean): any {
    return isUpvote ?
      this.httpClient.post(this.baseUrl + '/upvote', post)
      : this.httpClient.post(this.baseUrl + '/downvote', post);
  }

}
