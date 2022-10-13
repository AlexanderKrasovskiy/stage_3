import { Pipe, PipeTransform } from '@angular/core';
import { YtItem } from '../models/search-item.model';
import { ViewsSortOrder } from '../../shared/constants';

@Pipe({
  name: 'sortByViews',
})
export class SortByViewsPipe implements PipeTransform {
  transform(items: YtItem[], order = ViewsSortOrder.default): YtItem[] {
    if (!order) return [...items];

    return [...items].sort((a, b) => {
      const viewsA = +a.statistics.viewCount;
      const viewsB = +b.statistics.viewCount;

      return order === ViewsSortOrder.ascending
        ? viewsA - viewsB
        : viewsB - viewsA;
    });
  }
}
