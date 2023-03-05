import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs";

import { GET_X } from './app.reducers';

@Component({
  selector: 'app-home',
  template: `
      <h1>home</h1>
      <h3>state</h3>
      x : {{ (state$|async).x }}<br/>
    `
})
export class HomeComponent {
  state$: Observable<any>;
  lazy$: Observable<any>;

  constructor(private store : Store<any>) {
    store.dispatch({type: GET_X});
    this.state$ = this.store.select('state');
    this.lazy$ = this.store.select('lazy');
  }
}