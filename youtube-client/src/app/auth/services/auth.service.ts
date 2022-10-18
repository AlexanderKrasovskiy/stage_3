import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login = '';
  password = '';
  isLoggedIn = false;

  constructor(private userService: UserService, private router: Router) {
    this.isLoggedIn = !!localStorage.getItem('loggedIn');
  }

  onLogin() {
    this.login = this.login.trim();
    this.password = this.password.trim();

    if (!this.login || !this.password) return;

    localStorage.setItem('loggedIn', this.login);
    this.isLoggedIn = true;
    this.userService.username = this.login;

    this.login = '';
    this.password = '';

    this.router.navigateByUrl('/main');
  }

  onLogout() {
    localStorage.removeItem('loggedIn');
    this.isLoggedIn = false;
    this.userService.username = 'Your Name';

    this.router.navigateByUrl('/auth');
  }
}
