import {Component, OnInit} from '@angular/core';
import {UserService} from "../user/user-service";
import {Router} from "@angular/router";

@Component({
  selector: 'forum-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: string;
  userService: UserService;
  router: Router;

  constructor(userService: UserService, router: Router) {
    this.userService = userService;
    this.router = router;
  }


  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUserId();
  }

  redirectToDiscussion(): void {
    this.router.navigateByUrl('/discussion');
  }
}
