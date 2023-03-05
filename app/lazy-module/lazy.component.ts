import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { GET_LAZY } from './lazy.reducers';

@Component({
  template: `
      <p>Lazy Component</p>
    `
})
export class LazyComponent {
  constructor( 
    private _store : Store<any>
  ) {
    this._store.dispatch({type: GET_LAZY});
  }

}
