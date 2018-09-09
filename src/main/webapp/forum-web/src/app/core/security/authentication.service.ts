import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from "../user/user";
import {ToastrService} from "ngx-toastr";
import {BehaviorSubject, Observable} from "rxjs/index";
import * as jwt_decode from "jwt-decode";

@Injectable()
export class AuthenticationService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private toastrService: ToastrService) {
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
    return this.loggedIn.asObservable();
  }

  login(username: string, password: string) {
    return this.http.post<any>('/api/auth/signin', {usernameOrEmail: username, password: password}).pipe(map(user => {
      if (user && user.accessToken) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      this.toastrService.success('Successful login!');
      this.loggedIn.next(true);
      return jwt_decode(user.accessToken).sub;
    }));
  }

  logout(): void {
    this.loggedIn.next(false);
    localStorage.removeItem('currentUser');
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
