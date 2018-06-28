import { Movie } from '../models/movie.model'
import * as MovieActions from '../actions/movie.actions'

export function movieReducer(state: Movie[], action: MovieActions.Actions) {
  switch(action.type) {
    case MovieActions.ADD_MOVIE:
      return [...state, action.payload]
    case MovieActions.REMOVE_MOVIE:
      return [...state.filter((v, i) => i !== action.payload)]
    default:
      return state
  }
}
