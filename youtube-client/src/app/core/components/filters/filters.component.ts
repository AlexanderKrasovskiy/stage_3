import { Component, Output, EventEmitter, DoCheck } from '@angular/core';
import { DateSortOrder, ViewsSortOrder } from 'src/app/shared/constants';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements DoCheck {
  isVisible = false;

  private dateSortOrder = DateSortOrder.default;
  private viewsSortOrder = ViewsSortOrder.default;

  @Output() private dateOrder = new EventEmitter<DateSortOrder>();
  @Output() private viewsOrder = new EventEmitter<ViewsSortOrder>();
  @Output() private wordFilter = new EventEmitter<string>();

  constructor(private filtersService: FiltersService) {}

  ngDoCheck(): void {
    const visibilityChanged = this.isVisible !== this.filtersService.isVisible;
    if (visibilityChanged) {
      this.isVisible = this.filtersService.isVisible;
    }
  }

  setDateOrder(): void {
    this.dateSortOrder =
      this.dateSortOrder === DateSortOrder.oldToNew
        ? DateSortOrder.newToOld
        : DateSortOrder.oldToNew;

    this.viewsSortOrder = ViewsSortOrder.default;

    this.dateOrder.emit(this.dateSortOrder);
  }

  setViewsOrder(): void {
    this.viewsSortOrder =
      this.viewsSortOrder === ViewsSortOrder.ascending
        ? ViewsSortOrder.descending
        : ViewsSortOrder.ascending;

    this.dateSortOrder = DateSortOrder.default;

    this.viewsOrder.emit(this.viewsSortOrder);
  }

  setWordFilter(value: string): void {
    this.wordFilter.emit(value);
  }
}
