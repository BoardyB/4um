import {Entity} from "../repository/entity";

export class User extends Entity<string> {

  username: string;
  // password: string;
  roles: string[];
  forename: string;
  surname: string;
  registerDate: Date;
  profilePicture: string;

  public static deserialize(obj: any): User {
    const user = this.createEmptyUser();
    user.setId(obj.id);
    user.username = obj.username;
    user.roles = obj.roles;
    user.forename = obj.forename;
    user.surname = obj.surname;
    user.registerDate = obj.registerDate;
    user.profilePicture = obj.profilePicture;
    return user;
  }

  public static createEmptyUser(): User {
    return new User(null, null, null, null, null, null, null);
  }

  constructor(id: string, username: string, roles: string[], forename: string, surname: string, registerDate: Date, profilePicture: string) {
    super();
    this.setId(id);
    this.username = username;
    this.roles = roles;
    this.forename = forename;
    this.surname = surname;
    this.registerDate = registerDate;
    this.profilePicture = profilePicture;
  }
}
