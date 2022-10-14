import { Component } from '@angular/core';
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
export class HeaderComponent {
  constructor(
    private filtersService: FiltersService,
    public youtubeApiService: YoutubeApiService,
    public userService: UserService,
    private authService: AuthService,
    private router: Router,
  ) {}

  onSearch(): void {
    this.youtubeApiService.onSearch();
  }

  toggleFilters(): void {
    this.filtersService.toggleFilters();
  }

  onLogout() {
    this.authService.onLogout();
  }

  goHome() {
    this.router.navigate(['main']);
  }

  goLogin() {
    this.router.navigate(['auth']);
  }
}
