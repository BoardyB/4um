import {Injectable} from "@angular/core";
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs/index";

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  public getCurrentUserId(): string {
    const userAsJson = JSON.parse(localStorage.getItem('currentUserId'));
    return userAsJson.userId;
  }

  public getUserById(id: string): Observable<User> {
    return this.httpClient.get('/api/auth/user/' + id).pipe(map((user: any) => {
      return User.deserialize(user.responseBody);
    }));
  }

}
