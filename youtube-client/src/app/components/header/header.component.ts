import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  query: string = '';
  @Output() private search = new EventEmitter<string>();
  @Output() private toggle = new EventEmitter();
  @ViewChild('searchForm') private searchForm!: ElementRef<HTMLFormElement>;

  onSearch(): void {
    if (!this.query || !this.query.trim()) return;

    this.query = this.query.trim().toLowerCase();
    this.search.emit(this.query);

    this.searchForm.nativeElement.reset();
  }

  toggleFilters(): void {
    this.toggle.emit();
  }
}
