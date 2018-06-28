import { Action } from '@ngrx/store'
import { Movie } from '../models/movie.model'

export const ADD_MOVIE = 'ADD_MOVIE'
export const REMOVE_MOVIE = 'REMOVE_MOVIE'

export class AddMovie implements Action {
  readonly type = ADD_MOVIE

  constructor(public payload: Movie) {}
}

export class RemoveMovie implements Action {
  readonly type = REMOVE_MOVIE

  constructor(public payload: number) {}
}

export type Actions = AddMovie | RemoveMovie
