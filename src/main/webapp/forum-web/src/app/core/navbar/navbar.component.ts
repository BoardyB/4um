import {Component, OnInit} from '@angular/core';
import {UserService} from "../user/user-service";
import {Router} from "@angular/router";
import {User} from "../user/user";
import {AuthenticationService} from "../security/authentication.service";

@Component({
  selector: 'forum-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: User;
  dataLoaded: boolean = false;
  private userService: UserService;
  private router: Router;
  private authenticationService: AuthenticationService;

  constructor(userService: UserService, router: Router, authenticationService: AuthenticationService) {
    this.userService = userService;
    this.router = router;
    this.authenticationService = authenticationService;
  }


  ngOnInit(): void {
    this.userService.getUserById(this.userService.getCurrentUserId()).subscribe((user: User) => {
      this.currentUser = user;
      this.dataLoaded = true;
    });
  }

  redirectToDiscussion(): void {
    this.router.navigateByUrl('/discussion/all');
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  }
}
