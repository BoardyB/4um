import {Component} from "@angular/core";
import {User} from "../user/user";
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../security/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'forum-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: User = User.createEmptyUser();
  private authenticationService: AuthenticationService;
  private router: Router;

  constructor(authenticationService: AuthenticationService, router: Router) {
    this.authenticationService = authenticationService;
    this.router = router;
    this.authenticationService.logout();
  }

  login(form: NgForm): void {
    if (form.valid) {
      this.authenticationService.login(this.user.username, this.user.password).subscribe(user => {
        this.router.navigateByUrl('/discussion/all');
      });
    }
  }

  navigateToRegister(): void {
    this.router.navigateByUrl('/register');
  }

}
