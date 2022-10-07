import { Pipe, PipeTransform } from '@angular/core';
import { YtItem } from '../components/search-list/models/search-item.model';

@Pipe({
  name: 'sortByDate',
})
export class SortByDatePipe implements PipeTransform {
  transform(items: YtItem[], order?: 'oldToNew' | 'newToOld' | null): YtItem[] {
    if (!order) return items;

    return [...items].sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt).getTime();
      const dateB = new Date(b.snippet.publishedAt).getTime();

      return order === 'oldToNew' ? dateA - dateB : dateB - dateA;
    });
  }
}
