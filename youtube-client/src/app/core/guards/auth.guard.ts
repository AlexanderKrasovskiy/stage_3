import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  private isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn$.subscribe((res) => {
      this.isLoggedIn = res;
    });
  }

  canLoad(): boolean {
    return this.checkAuth();
  }

  canActivate(): boolean {
    return this.checkAuth();
  }

  private checkAuth() {
    if (this.isLoggedIn) return true;

    this.router.navigateByUrl('/auth');
    return false;
  }
}
