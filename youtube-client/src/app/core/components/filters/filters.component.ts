import { Component } from '@angular/core';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  constructor(public filtersService: FiltersService) {}

  setDateOrder(): void {
    this.filtersService.setDateOrder();
  }

  setViewsOrder(): void {
    this.filtersService.setViewsOrder();
  }

  setWordFilter(value: string): void {
    this.filtersService.setWordFilter(value);
  }
}
