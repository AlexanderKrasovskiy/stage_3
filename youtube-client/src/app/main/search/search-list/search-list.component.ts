import { Component, OnInit } from '@angular/core';
import { YtResponse } from '../models/search-response.model';
import { YtItem } from '../models/search-item.model';
import data from '../../../services/response.json';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit {
  public response: YtResponse = data;
  public items: YtItem[] = data.items;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor, @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, class-methods-use-this
  ngOnInit(): void {}
}
