import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): Observable<boolean | UrlTree> | boolean {
    return this.checkAuth();
  }

  canActivate(): Observable<boolean | UrlTree> | boolean {
    return this.checkAuth();
  }

  private checkAuth() {
    return this.authService.isLoggedIn$.pipe(
      map((isLoggedIn) => isLoggedIn || this.router.createUrlTree(['/auth'])),
    );
  }
}
