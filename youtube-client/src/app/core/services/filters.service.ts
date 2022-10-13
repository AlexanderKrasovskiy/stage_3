import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  isVisible = false;

  toggleFilters(): void {
    this.isVisible = !this.isVisible;
  }
}
