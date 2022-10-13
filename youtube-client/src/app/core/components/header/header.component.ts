import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  query: string = '';
  @Output() private search = new EventEmitter<string>();
  @ViewChild('searchForm') private searchForm?: ElementRef<HTMLFormElement>; // del searchForm

  constructor(private filtersService: FiltersService) {}

  onSearch(): void {
    if (!this.query || !this.query.trim()) return;

    this.query = this.query.trim().toLowerCase();

    this.search.emit(this.query);
    this.searchForm?.nativeElement.reset();
  }

  toggleFilters(): void {
    this.filtersService.toggleFilters();
  }
}
