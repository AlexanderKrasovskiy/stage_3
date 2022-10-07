import { Pipe, PipeTransform } from '@angular/core';
import { YtItem } from '../components/search-list/models/search-item.model';

@Pipe({
  name: 'sortByViews',
})
export class SortByViewsPipe implements PipeTransform {
  transform(items: YtItem[], order?: 'ascending' | 'descending'): YtItem[] {
    if (!order) return items;

    if (order === 'ascending') {
      return [...items].sort((a, b) => {
        const viewsA = +a.statistics.viewCount;
        const viewsB = +b.statistics.viewCount;

        return viewsA - viewsB;
      });
    }
    return [...items].sort((a, b) => {
      const viewsA = +a.statistics.viewCount;
      const viewsB = +b.statistics.viewCount;

      return viewsB - viewsA;
    });
  }
}
