import { YtItem } from './search-item.model';

export type YtResponse = {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YtItem[];
};
