import { Routes } from '@angular/router';

import { CollectionPageComponent } from './containers/collection-page'
import { FindMoviePageComponent } from './containers/find-movie-page'

export const routes: Routes = [
  {
    path: '',
    component: FindMoviePageComponent
  },
  {
    path: 'movies/collection',
    component: CollectionPageComponent
  },
  {
    path: '**',
    component: FindMoviePageComponent
  }
];
