import { Movie } from './movie';

export interface MovieModal extends Movie {
  imdbRating: string;
  Type: string;
  Plot: string;
  Genre: string;
  Director: string;
  Released: Date;
  Runtime: string;
}
