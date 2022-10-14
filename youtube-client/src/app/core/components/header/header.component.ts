import { Component } from '@angular/core';
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
}
