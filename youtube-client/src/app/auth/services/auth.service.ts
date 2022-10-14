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
    localStorage.setItem('loggedIn', 'true');
    this.userService.username = this.login;
    this.login = '';
    this.password = '';
  }

  onLogout() {
    localStorage.removeItem('loggedIn');
    this.userService.username = 'Your Name';
  }
}
