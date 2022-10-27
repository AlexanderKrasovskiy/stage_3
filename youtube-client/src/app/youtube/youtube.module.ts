import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { YoutubeRoutingModule } from './youtube-routing.module';

import { SharedModule } from '../shared/shared.module';

import { SearchListComponent } from './pages/search-list/search-list.component';
import { SearchCardComponent } from './components/search-card/search-card.component';

import { BackgroundHighlightDirective } from './directives/background-highlight.directive';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SortByViewsPipe } from './pipes/sort-by-views.pipe';
import { FilterByWordPipe } from './pipes/filter-by-word.pipe';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { BorderHighlightDirective } from './directives/border-highlight.directive';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { apiVideosReducer } from '../redux/reducers/youtube-api.reducer';

@NgModule({
  declarations: [
    SearchListComponent,
    SearchCardComponent,
    BackgroundHighlightDirective,
    SortByDatePipe,
    SortByViewsPipe,
    FilterByWordPipe,
    DetailsPageComponent,
    BorderHighlightDirective,
    CustomCardComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    SharedModule,
    StoreModule.forFeature('youtubeApiState', apiVideosReducer),
  ],
  exports: [SearchListComponent, DetailsPageComponent],
})
export class YoutubeModule {}
