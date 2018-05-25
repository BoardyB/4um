import {Entity} from "../core/repository/entity";

export class Post extends Entity<string> {
  description: string;
  uploadDate: Date;
  voteUp: number;
  voteDown: number;
  creator: string;
  discussionId: string;

  public static deserialize(obj: any) {
    const post = this.createEmptyPost();
    post.setId(obj.id);
    post.description = obj.description;
    post.uploadDate = obj.uploadDate;
    post.voteUp = obj.voteUp;
    post.voteDown = obj.voteDown;
    post.creator = obj.creator;
    post.discussionId = obj.discussionId;
    return post;
  }

  public static createEmptyPost() {
    return new Post(null, null, null, null, null, null, null);
  }

  constructor(id: string, description: string, uploadDate: Date, voteUp: number, voteDown: number, creator: string, discussionId: string) {
    super();
    this.setId(id);
    this.description = description;
    this.uploadDate = uploadDate;
    this.voteUp = voteUp;
    this.voteDown = voteDown;
    this.creator = creator;
    this.discussionId = discussionId;
  }
}
