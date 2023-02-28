import { Component, Input } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { FormControl } from '@angular/forms';

import { Movie } from '../../model/movie';
import { MovieModal } from '../../model/movie-modal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  public movies: Movie[] = [];
  public movie = '';
  public imdbID: string | null = '';
  public moviesModal: MovieModal = {} as MovieModal;
  public movieNotExists: boolean = false;
  public form = new FormControl();

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  searchMovie(movie: string) {
    this.movie = movie;
    this.movieService.searchMovieByName(movie).subscribe((movieList) => {
      this.movies = movieList.Search;
      this.movieNotExists = movieList.Search === undefined;
    });
  }

  searchMovieByImdbId(imdbID: string) {
    this.imdbID = this.activatedRoute.snapshot.paramMap.get('imdbID');
    this.movieService.searchMovieByImdbId(imdbID).subscribe((movieModal) => {
      this.moviesModal = movieModal;
    });
  }
}
