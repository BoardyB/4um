import {Injectable} from "@angular/core";
import {User} from "./user";
import {isPresent} from "../util/util";
import {MOCK_USERS} from "./mock-users";

@Injectable()
export class UserService {

  public getCurrentUserId(): string {
    return 'userId';
  }

  public getUserById(id: string): User {
    const user = MOCK_USERS.find((user: User) => user.getId() === id);
    if (isPresent(user)) {
      return user;
    } else {
      throw new Error("User with the following id [" + id + "] does not exist.");
    }
  }

}
