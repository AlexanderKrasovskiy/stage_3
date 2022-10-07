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
  public query: string = '';
  @Output() private search = new EventEmitter<string>();
  @Output() private toggle = new EventEmitter();
  @ViewChild('searchForm') private searchForm!: ElementRef<HTMLFormElement>;

  public onSearch() {
    if (!this.query || !this.query.trim()) return;

    this.query = this.query.trim().toLowerCase();
    this.search.emit(this.query);

    this.searchForm.nativeElement.reset();
  }

  public toggleFilters() {
    this.toggle.emit();
  }
}
