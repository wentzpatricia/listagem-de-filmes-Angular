import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieModalComponent } from './component/movie-modal/movie-modal.component';
import { MovieComponent } from './component/movie/movie.component';

const routes: Routes = [
  {
    path: '',
    component: MovieComponent,
  },

  {
    path: ':id',
    component: MovieModalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
