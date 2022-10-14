import { Injectable } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login = '';
  password = '';

  constructor(private userService: UserService) {}

  onLogin() {
    if (!this.login.trim() || !this.password.trim()) return;

    this.login = this.login.trim();
    this.password = this.password.trim();

    localStorage.setItem('loggedIn', this.login);
    this.userService.username = this.login;

    this.login = '';
    this.password = '';
  }

  onLogout() {
    localStorage.removeItem('loggedIn');
    this.userService.username = 'Your Name';
  }

  get isLoggedIn() {
    if (localStorage.getItem('loggedIn')) return true;
    return false;
  }
}
