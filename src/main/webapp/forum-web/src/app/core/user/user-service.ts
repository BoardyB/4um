import {Injectable} from "@angular/core";
import {User} from "./user";

@Injectable()
export class UserService {

  public getCurrentUserId(): string {
    return 'Test User';
  }

  public getUserById(id: string): User {
    return new User(id, "user", "user", "Elek", "Test", new Date(2018, 6, 4, 9, 19), "elek@test.com");
  }

}
