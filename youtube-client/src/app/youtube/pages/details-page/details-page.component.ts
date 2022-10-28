import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
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
export class DetailsPageComponent implements OnInit {
  item$!: Observable<YtItem | null>;

  constructor(
    private route: ActivatedRoute,
    private filtersService: FiltersService,
    private router: Router,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.filtersService.isVisible = false;
    const id = this.route.snapshot.params['id'] as string;
    const idType = id.slice(0, 6);

    if (idType === 'custom') {
      this.store.dispatch(searchAdminCardAction({ id }));
      this.item$ = this.store.select(selectCurrentCustomCard).pipe(
        tap((item) => {
          if (!item) this.router.navigate(['404']);
        }),
      );
    } else {
      this.store.dispatch(loadByIdAction({ id }));
      this.item$ = this.store.select(selectCurrentApiCard).pipe(
        tap((item) => {
          if (!item) this.router.navigate(['404']);
        }),
      );
    }
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}
