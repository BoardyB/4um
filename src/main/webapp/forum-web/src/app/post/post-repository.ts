import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Repository} from "../core/repository/repository";
import {Post} from "./post";

@Injectable()
export class PostRepository extends Repository<Post, string> {

  constructor(httpClient: HttpClient) {
    super('forum/post', httpClient, Post);
  }

  findByDiscussion(discussionId: string): any {
    return this.httpClient.get(this.baseUrl + '/discussion/' + discussionId);
  }

}
