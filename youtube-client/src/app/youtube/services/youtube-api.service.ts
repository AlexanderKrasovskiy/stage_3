import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { YtItem } from '../models/search-item.model';
import data from './mock-response.json';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  query: string = '';
  items: YtItem[] = data.items;

  constructor(private router: Router) {}

  onSearch(): void {
    if (!this.query || !this.query.trim()) return;

    this.query = this.query.trim().toLowerCase();

    this.query = '';
  }

  onDetails(id: string) {
    this.router.navigate(['main', id]);
  }
}
