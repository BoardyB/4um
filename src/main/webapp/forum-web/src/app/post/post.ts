import {Entity} from "../core/repository/entity";
import {User} from "../core/user/user";
import {deserializeFromList} from "../core/util/util";

export class Post extends Entity<string> {
  description: string;
  uploadDate: Date;
  creator: string;
  discussionId: string;
  upVotedUsers: User[];
  downVotedUsers: User[];

  public static deserialize(obj: any) {
    const post = this.createEmptyPost();
    post.setId(obj.id);
    post.description = obj.description;
    post.uploadDate = obj.uploadDate;
    post.creator = obj.creator;
    post.discussionId = obj.discussionId;
    post.upVotedUsers = deserializeFromList(obj.upVotedUsers, User);
    post.downVotedUsers = deserializeFromList(obj.downVotedUsers, User);
    return post;
  }

  public static createEmptyPost() {
    return new Post(null, null, null, null, null, [], []);
  }


  constructor(id: string, description: string, uploadDate: Date, creator: string, discussionId: string, upVotedUsers: User[], downVotedUsers: User[]) {
    super();
    this.setId(id);
    this.description = description;
    this.uploadDate = uploadDate;
    this.creator = creator;
    this.discussionId = discussionId;
    this.upVotedUsers = upVotedUsers;
    this.downVotedUsers = downVotedUsers;
  }

  userUpvoted(userId: string): boolean {
    return this.upVotedUsers.some((user: User) => user.getId() === userId);
  }

  userDownvoted(userId: string): boolean {
    return this.downVotedUsers.some((user: User) => user.getId() === userId);
  }
}
