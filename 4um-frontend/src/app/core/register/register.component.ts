import {Component} from "@angular/core";
import {User} from "../user/user";
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../security/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'forum-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user: User = User.createEmptyUser();
  private authenticationService: AuthenticationService;
  private router: Router;

  constructor(authenticationService: AuthenticationService, router: Router) {
    this.authenticationService = authenticationService;
    this.router = router;
    this.authenticationService.logout();
  }

  register(form: NgForm): void {
    if (form.valid) {
      this.authenticationService.register(this.user).subscribe(data => {
        this.navigateToLogin();
      });
    }
  }

  navigateToLogin(): void {
    this.router.navigateByUrl('/login');
  }
}
