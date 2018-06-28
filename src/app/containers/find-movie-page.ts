import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-find-movie-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <h1>searchpage</h1>
    </div>
  `
})
export class FindMoviePageComponent {

  constructor() {
  }

}
