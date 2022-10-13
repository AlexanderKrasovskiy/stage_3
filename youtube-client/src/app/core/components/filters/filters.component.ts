import { Component, Output, EventEmitter } from '@angular/core';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Output() private wordFilter = new EventEmitter<string>();

  constructor(public filtersService: FiltersService) {}

  setDateOrder(): void {
    this.filtersService.setDateOrder();
  }

  setViewsOrder(): void {
    this.filtersService.setViewsOrder();
  }

  setWordFilter(value: string): void {
    this.wordFilter.emit(value);
  }
}
