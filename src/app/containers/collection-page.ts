import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <h1>collectionpage</h1>
    </div>
  `
})
export class CollectionPageComponent {

  constructor() {
  }

}
