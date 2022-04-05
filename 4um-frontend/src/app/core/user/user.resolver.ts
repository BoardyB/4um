import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from "./user";
import { UserService } from "./user-service";
import { isPresent } from "../util/util";

@Injectable()
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (isPresent(route.params['id'])) {
      return this.userService.getUserById(route.params['id']);
    } else {
      return User.createEmptyUser();
    }
  }
}
