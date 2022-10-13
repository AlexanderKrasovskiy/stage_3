import { Pipe, PipeTransform } from '@angular/core';
import { YtItem } from '../components/search-list/models/search-item.model';
import { DateSortOrder } from '../constants';

@Pipe({
  name: 'sortByDate',
})
export class SortByDatePipe implements PipeTransform {
  transform(items: YtItem[], order = DateSortOrder.default): YtItem[] {
    if (!order) return [...items];

    return [...items].sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt).getTime();
      const dateB = new Date(b.snippet.publishedAt).getTime();

      return order === DateSortOrder.oldToNew ? dateA - dateB : dateB - dateA;
    });
  }
}
