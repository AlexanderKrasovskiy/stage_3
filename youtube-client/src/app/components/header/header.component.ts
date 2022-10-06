import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public query: string = '';
  @Output() public search = new EventEmitter<string>();
  @Output() public toggle = new EventEmitter();

  public onSearch() {
    this.query = this.query.trim();

    if (this.query) {
      this.search.emit(this.query.toLowerCase());
    }
  }

  public toggleFilters() {
    this.toggle.emit();
  }
}
