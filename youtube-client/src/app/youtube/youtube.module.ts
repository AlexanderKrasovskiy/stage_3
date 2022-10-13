import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeRoutingModule } from './youtube-routing.module';

import { SharedModule } from '../shared/shared.module';

import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchCardComponent } from './components/search-card/search-card.component';

import { BorderHighlightDirective } from './directives/border-highlight.directive';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SortByViewsPipe } from './pipes/sort-by-views.pipe';
import { FilterByWordPipe } from './pipes/filter-by-word.pipe';

@NgModule({
  declarations: [
    SearchListComponent,
    SearchCardComponent,
    BorderHighlightDirective,
    SortByDatePipe,
    SortByViewsPipe,
    FilterByWordPipe,
  ],
  imports: [CommonModule, YoutubeRoutingModule, SharedModule],
  exports: [SearchListComponent], // m.b. refactor to page ?
})
export class YoutubeModule {}
