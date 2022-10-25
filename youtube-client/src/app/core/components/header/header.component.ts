import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { YoutubeApiService } from 'src/app/youtube/services/youtube-api.service';
import { FiltersService } from '../../services/filters.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  authSubscription?: Subscription;

  constructor(
    private filtersService: FiltersService,
    public youtubeApiService: YoutubeApiService,
    public userService: UserService,
    public authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.isLoggedIn$.subscribe((res) => {
      this.isLoggedIn = res;
    });
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.youtubeApiService.searchText$.next(target.value);
  }

  toggleFilters(): void {
    this.filtersService.toggleFilters();
  }

  onLogout() {
    this.authService.onLogout();
  }

  toAdmin() {
    this.router.navigate(['admin']);
  }
}
