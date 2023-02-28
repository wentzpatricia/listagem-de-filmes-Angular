import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieComponent } from './component/movie/movie.component';
import { MovieModalComponent } from './component/movie-modal/movie-modal.component';
import { InfoModalComponent } from './component/info-modal/info-modal.component';

@NgModule({
  declarations: [MovieComponent, MovieModalComponent, InfoModalComponent],
  imports: [CommonModule, MoviesRoutingModule, ReactiveFormsModule],
  exports: [MovieModalComponent],
})
export class MoviesModule {}
