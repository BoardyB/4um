import {Injectable} from "@angular/core";
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs/index";
import * as jwt_decode from "jwt-decode";

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  public getCurrentUserId(): string {
    const userAsJson = JSON.parse(localStorage.getItem('currentUser'));
    let decodedToken = null;
    try {
      decodedToken = jwt_decode(userAsJson.accessToken);
    } catch (Error) {
      throw new Error('Access token cannot be decoded.');
    }
    return decodedToken.sub;
  }

  public getUserById(id: string): Observable<User> {
    return this.httpClient.get('/api/auth/user/' + id).pipe(map((user: any) => {
      return User.deserialize(user.responseBody);
    }));
  }

  public getUsersByIds(ids: string[]): Observable<User[]> {
    return this.httpClient.post('/api/auth/user', ids ).pipe(map((data: any) => {
      const deserializedUsers = [];
      data.forEach(user => deserializedUsers.push(User.deserialize(user)));
      return deserializedUsers;
    }));
  }
}
