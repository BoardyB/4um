import { Component } from '@angular/core';

@Component({
  selector: 'forum-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentUser = 'Test User';
}
