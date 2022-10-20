import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { YtItem } from '../../models/search-item.model';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { FiltersService } from '../../../core/services/filters.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  item$!: Observable<YtItem>;

  constructor(
    private route: ActivatedRoute,
    private youtubeApiService: YoutubeApiService,
    private filtersService: FiltersService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.filtersService.isVisible = false;
    const id = this.route.snapshot.params['id'] as string;
    this.item$ = this.youtubeApiService.searchById(id).pipe(
      tap((item) => {
        if (!item) this.router.navigate(['404']);
      }),
    );
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}
