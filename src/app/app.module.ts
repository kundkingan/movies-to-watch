import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store'
import { MaterialModule } from './material.module'

import { movieReducer } from './reducers/movie.reducer'
import { routes } from './routes';

import {
  AppComponent,
  CollectionPageComponent,
  FindMoviePageComponent
} from './containers'

@NgModule({
  declarations: [
    AppComponent,
    CollectionPageComponent,
    FindMoviePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.forRoot({
      movie: movieReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
