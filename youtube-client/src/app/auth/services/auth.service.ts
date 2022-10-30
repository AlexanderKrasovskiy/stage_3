import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(
    !!localStorage.getItem('loggedIn'),
  );

  constructor(private userService: UserService, private router: Router) {}

  onLogin(login: string, password: string) {
    if (!login || !password) return;

    localStorage.setItem('loggedIn', login);
    this.isLoggedIn$.next(true);
    this.userService.username = login;

    this.router.navigateByUrl('/main');
  }

  onLogout() {
    localStorage.removeItem('loggedIn');
    this.isLoggedIn$.next(false);
    this.userService.username = 'Your Name';

    this.router.navigateByUrl('/auth');
  }

  autologin() {
    this.isLoggedIn$.next(!!localStorage.getItem('loggedIn'));
  }
}
