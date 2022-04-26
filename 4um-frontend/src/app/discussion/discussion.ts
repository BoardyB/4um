import { Entity } from "../core/repository/entity";

export class Discussion extends Entity<string> {
  postCount: number;
  creationDate: Date;
  title: string;
  description: string;
  creator: string;
  featured: boolean;
  deleted: boolean;

  public static deserialize(obj: any): Discussion {
    const discussion = this.createEmptyDiscussion();
    discussion.setId(obj.id);
    discussion.postCount = obj.postCount;
    discussion.creationDate = obj.creationDate;
    discussion.title = obj.title;
    discussion.description = obj.description;
    discussion.creator = obj.creator;
    discussion.featured = obj.featured;
    discussion.deleted = obj.deleted;
    return discussion;
  }

  public static createEmptyDiscussion(): Discussion {
    return new Discussion(null, null, null, null, new Date(), null, false, false);
  }


  constructor(id: string, postCount: number, title: string, description: string, creationDate: Date, creator: string, isFeatured: boolean, isDeleted: boolean) {
    super();
    this.setId(id);
    this.postCount = postCount;
    this.creationDate = creationDate;
    this.creator = creator;
    this.featured = isFeatured;
    this.deleted = isDeleted;
  }
}
