// types/Movie.ts


  export interface Movie {
    imdbID: string;
    Title: string;
    Poster: string;
    Year: string;
    Ratings: { Source: string; Value: string }[];
    Trailer?: string;
    WatchOptions?: string[];
  }
  