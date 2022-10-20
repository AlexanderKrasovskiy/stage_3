import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { YoutubeApiService } from 'src/app/youtube/services/youtube-api.service';
import { FiltersService } from '../../services/filters.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(
    private filtersService: FiltersService,
    public youtubeApiService: YoutubeApiService,
    public userService: UserService,
    public authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((res) => {
      this.isLoggedIn = res;
    });
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

  goHome() {
    this.router.navigate(['']);
  }
}
