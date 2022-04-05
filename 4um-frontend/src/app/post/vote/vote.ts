export class Vote {
  postId: string;
  userId: string;
  isUpvote: boolean;

  public static createEmptyVote(): Vote {
    return new Vote(null, null, null);
  }

  public static deserialize(obj: any): Vote {
    const vote = this.createEmptyVote();
    vote.postId = obj.postId;
    vote.userId = obj.userId;
    vote.isUpvote = obj.isUpvote;
    return vote;
  }

  constructor(postId: string, userId: string, isUpvote: boolean) {
    this.postId = postId;
    this.userId = userId;
    this.isUpvote = isUpvote;
  }
}
