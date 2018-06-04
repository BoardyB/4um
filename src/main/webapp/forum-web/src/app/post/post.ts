import {Entity} from "../core/repository/entity";
import {User} from "../core/user/user";
import {deserializeFromList} from "../core/util/util";

export class Post extends Entity<string> {
  description: string;
  lastModifiedDate: Date;
  creator: string;
  discussionId: string;
  upVotedUsers: User[];
  downVotedUsers: User[];
  edited: boolean;

  public static deserialize(obj: any) {
    const post = this.createEmptyPost();
    post.setId(obj.id);
    post.description = obj.description;
    post.lastModifiedDate = obj.lastModifiedDate;
    post.creator = obj.creator;
    post.discussionId = obj.discussionId;
    post.upVotedUsers = deserializeFromList(obj.upVotedUsers, User);
    post.downVotedUsers = deserializeFromList(obj.downVotedUsers, User);
    post.edited = obj.edited;
    return post;
  }

  public static createEmptyPost() {
    return new Post(null, null, null, null, null, [], [], null);
  }


  constructor(id: string, description: string, uploadDate: Date, creator: string, discussionId: string, upVotedUsers: User[], downVotedUsers: User[], edited: boolean) {
    super();
    this.setId(id);
    this.description = description;
    this.lastModifiedDate = uploadDate;
    this.creator = creator;
    this.discussionId = discussionId;
    this.upVotedUsers = upVotedUsers;
    this.downVotedUsers = downVotedUsers;
    this.edited = edited;
  }

  userUpvoted(userId: string): boolean {
    return this.upVotedUsers.some((user: User) => user.getId() === userId);
  }

  userDownvoted(userId: string): boolean {
    return this.downVotedUsers.some((user: User) => user.getId() === userId);
  }
}
