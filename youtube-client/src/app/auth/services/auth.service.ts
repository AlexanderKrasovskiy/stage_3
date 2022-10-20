import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login = '';
  password = '';
  isLoggedIn$ = new ReplaySubject<boolean>();

  constructor(private userService: UserService, private router: Router) {
    this.isLoggedIn$.next(!!localStorage.getItem('loggedIn'));
  }

  onLogin() {
    this.login = this.login.trim();
    this.password = this.password.trim();

    if (!this.login || !this.password) return;

    localStorage.setItem('loggedIn', this.login);
    this.isLoggedIn$.next(true);
    this.userService.username = this.login;

    this.login = '';
    this.password = '';

    this.router.navigateByUrl('/main');
  }

  onLogout() {
    localStorage.removeItem('loggedIn');
    this.isLoggedIn$.next(false);
    this.userService.username = 'Your Name';

    this.router.navigateByUrl('/auth');
  }
}
