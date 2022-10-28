import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Subscription,
  tap,
} from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { clearAdminCards } from 'src/app/redux/actions/admin.actions';
import {
  clearApiState,
  loadVideosAction,
} from 'src/app/redux/actions/youtube-api.actions';
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
  searchInput = new FormControl('', { nonNullable: true });

  constructor(
    private filtersService: FiltersService,
    public userService: UserService,
    public authService: AuthService,
    private router: Router,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.isLoggedIn$.subscribe((res) => {
      this.isLoggedIn = res;
    });

    this.searchInput.valueChanges
      .pipe(
        filter((query) => query.length >= 3),
        debounceTime(700),
        distinctUntilChanged(),
        map((query) => query.toLowerCase()),
        tap((query) => this.store.dispatch(loadVideosAction({ query }))),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }

  toggleFilters(): void {
    this.filtersService.toggleFilters();
  }

  onLogout() {
    this.authService.onLogout();
    this.searchInput.reset();
    /* eslint-disable @ngrx/avoid-dispatching-multiple-actions-sequentially */
    this.store.dispatch(clearAdminCards());
    this.store.dispatch(clearApiState());
  }

  toAdmin() {
    this.router.navigate(['admin']);
  }
}
