import {Entity} from "../repository/entity";

export class User extends Entity<string> {

  username: string;
  password: string;
  forename: string;
  surname: string;
  registerDate: Date;
  email: string;

  public static deserialize(obj: any): User {
    const user = this.createEmptyUser();
    user.setId(obj.id);
    user.username = obj.username;
    user.password = obj.password;
    user.forename = obj.forename;
    user.surname = obj.surname;
    user.registerDate = obj.registerDate;
    user.email = obj.email;
    return user;
  }

  public static createEmptyUser(): User {
    return new User(null, null, null, null, null, null, null);
  }


  constructor(id: string, username: string, password: string, forename: string, surname: string, registerDate: Date, email: string) {
    super();
    this.setId(id);
    this.username = username;
    this.password = password;
    this.forename = forename;
    this.surname = surname;
    this.registerDate = registerDate;
    this.email = email;
  }
}
