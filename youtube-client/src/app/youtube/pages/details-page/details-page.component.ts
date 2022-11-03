import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { searchAdminCardAction } from 'src/app/redux/actions/admin.actions';
import { selectCurrentCustomCard } from 'src/app/redux/selectors/admin.selectors';
import { AppState } from 'src/app/redux/state.models';
import { loadByIdAction } from 'src/app/redux/actions/youtube-api.actions';
import { selectCurrentApiCard } from 'src/app/redux/selectors/youtube-api.selectors';
import { FiltersService } from '../../../core/services/filters.service';
import { YtItem } from '../../models/search-item.model';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit, OnDestroy {
  item$!: Observable<YtItem | null>;
  routeSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private filtersService: FiltersService,
    private router: Router,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.filtersService.isVisible = false;
    this.routeSubscription = this.route.params.subscribe(({ id }) => {
      const idType = id.slice(0, 6);

      if (idType === 'custom') {
        this.store.dispatch(searchAdminCardAction({ id }));
        this.item$ = this.store.select(selectCurrentCustomCard);
      } else {
        this.store.dispatch(loadByIdAction({ id }));
        this.item$ = this.store.select(selectCurrentApiCard);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }
}
