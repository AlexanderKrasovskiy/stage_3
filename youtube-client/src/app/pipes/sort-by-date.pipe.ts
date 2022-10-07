import { Pipe, PipeTransform } from '@angular/core';
import { YtItem } from '../components/search-list/models/search-item.model';

@Pipe({
  name: 'sortByDate',
})
export class SortByDatePipe implements PipeTransform {
  transform(items: YtItem[], order?: 'oldToNew' | 'newToOld'): YtItem[] {
    if (!order) return items;

    if (order === 'oldToNew') {
      return [...items].sort((a, b) => {
        const dateA = new Date(a.snippet.publishedAt).getTime();
        const dateB = new Date(b.snippet.publishedAt).getTime();

        return dateA - dateB;
      });
    }
    return [...items].sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt).getTime();
      const dateB = new Date(b.snippet.publishedAt).getTime();

      return dateB - dateA;
    });
  }
}
