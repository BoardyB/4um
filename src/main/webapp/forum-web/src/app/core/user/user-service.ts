import {Injectable} from "@angular/core";
import {User} from "./user";

@Injectable()
export class UserService {

  public getCurrentUserId(): string {
    return 'Test User';
  }

  public getUserById(id: string): User {
    let randomString = Math.random().toString(36).substring(7);
    return new User(id, randomString, [], randomString, randomString, new Date(), '');
  }

}
