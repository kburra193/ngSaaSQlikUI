export type QlikApp = {
  id: number;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  original_title: string;
  vote_average: number;
  vote_count: number;
  revenue?: number;
  runtime?: string;
  status?: string;
  genres?: Genre[];
};

export type QlikAppDto = {
  page: number;
  results: QlikApp[];
  total_pages: number;
  total_results: number;
};

export type Genre = {
  id: number;
  name: string;
};
