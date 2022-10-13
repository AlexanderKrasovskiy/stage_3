import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchListComponent } from './search-list.component';

describe('SearchResultsComponent', () => {
  let component: SearchListComponent;
  let fixture: ComponentFixture<SearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
