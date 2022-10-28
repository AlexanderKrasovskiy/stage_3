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

export type YtVideoResponse = {
  items: YtIdItem[];
};

type YtIdItem = {
  id: {
    videoId: string;
  };
};
