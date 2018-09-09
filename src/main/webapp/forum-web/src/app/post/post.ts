import {Entity} from "../core/repository/entity";
import {User} from "../core/user/user";
import {deserializeFromList} from "../core/util/util";
import {Vote} from "./vote/vote";

export class Post extends Entity<string> {
  description: string;
  lastModifiedDate: Date;
  creator: string;
  discussionId: string;
  upVotedUsers: Vote[];
  downVotedUsers: Vote[];
  edited: boolean;
  creatorUser: User;

  public static deserialize(obj: any) {
    const post = this.createEmptyPost();
    post.setId(obj.id);
    post.description = obj.description;
    post.lastModifiedDate = obj.lastModifiedDate;
    post.creator = obj.creator;
    post.discussionId = obj.discussionId;
    post.upVotedUsers = deserializeFromList(obj.upVotedUsers, Vote);
    post.downVotedUsers = deserializeFromList(obj.downVotedUsers, Vote);
    post.edited = obj.edited;
    post.creatorUser = obj.creatorUser;
    return post;
  }

  public static createEmptyPost() {
    return new Post(null, null, null, null, null, [], [], null);
  }


  constructor(id: string, description: string, uploadDate: Date, creator: string, discussionId: string, upVotedUsers: Vote[], downVotedUsers: Vote[], edited: boolean) {
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
    return this.upVotedUsers.some((vote: Vote) => vote.userId === userId);
  }

  userDownvoted(userId: string): boolean {
    return this.downVotedUsers.some((vote: Vote) => vote.userId === userId);
  }
}
