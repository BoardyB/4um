import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {Discussion} from "../../../discussion/discussion";
import {isPresent} from "../../util/util";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'forum-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  private route: ActivatedRoute;

  constructor(route: ActivatedRoute) {
    this.route = route;
  }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(): void {
    const loadedUser = this.route.snapshot.data.user;
    if (isPresent(loadedUser)) {
      this.user = loadedUser;
      return;
    }
    throw new Error('User does not exist.');
  }

}
