import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from "../user/user";
import {isPresent} from "../util/util";
import {ToastrService} from "ngx-toastr";
import {BehaviorSubject, Observable} from "rxjs/index";

@Injectable()
export class AuthenticationService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private toastrService: ToastrService) {
  }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(username: string, password: string) {
    return this.http.post<any>('/api/auth/signin', {usernameOrEmail: username, password: password}).pipe(map(user => {
      if (user && user.accessToken) {
        localStorage.setItem('currentUserId', JSON.stringify(user));
      }
      this.toastrService.success('Successful login!');
      this.loggedIn.next(true);
      return User.deserialize(user);
    }));
  }

  logout(): void {
    this.loggedIn.next(false);
    localStorage.removeItem('currentUserId');
  }

  register(user: User): Observable<any> {
    return this.http.post<any>('/api/auth/signup', {
      username: user.username,
      password: user.password,
      name: user.getDisplayName(),
      email: user.email
    }).pipe(map(data => {
      this.toastrService.success('Registered successfully');
      return data;
    }));
  }
}
