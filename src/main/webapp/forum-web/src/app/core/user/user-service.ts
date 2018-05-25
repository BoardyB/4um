import {Injectable} from "@angular/core";
import {User} from "./user";

@Injectable()
export class UserService {

  public getCurrentUserId(): string {
    return 'Test User';
  }

  public getUserById(id: string): User {
    return new User(id, 'Test User', [], 'User', 'Test', new Date(), '');
  }

}
