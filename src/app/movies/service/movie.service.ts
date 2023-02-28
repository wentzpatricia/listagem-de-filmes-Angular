import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../model/movie';
import { MovieModal } from '../model/movie-modal';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private URL: string = environment.API_URL;
  private KEY: string = environment.API_KEY;

  constructor(private httpClient: HttpClient) {}

  searchMovieByName(name: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.URL}${this.KEY}&s=${name}`);
  }

  searchMovieByImdbId(imdbID: string | null): Observable<MovieModal> {
    return this.httpClient.get<MovieModal>(
      `${this.URL}${this.KEY}&i=${imdbID}`
    );
  }
}
