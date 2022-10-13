import { Pipe, PipeTransform } from '@angular/core';
import { YtItem } from '../components/search-list/models/search-item.model';

@Pipe({
  name: 'filterByWord',
})
export class FilterByWordPipe implements PipeTransform {
  transform(items: YtItem[], word?: string): YtItem[] {
    if (!word) return [...items];

    return [...items].filter((item) =>
      item.snippet.title.toLowerCase().includes(word.toLowerCase()),
    );
  }
}
