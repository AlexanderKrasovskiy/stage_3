import { Injectable } from '@angular/core';
import { YtItem } from '../models/search-item.model';
import data from './mock-response.json';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  query: string = '';
  items?: YtItem[];

  onSearch(): void {
    if (!this.query || !this.query.trim()) return;

    this.query = this.query.trim().toLowerCase();

    this.items = data.items;
    this.query = '';
  }
}
