import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./core/security/authentication.service";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isLoggedIn$: Observable<boolean>;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn();
  }
}
