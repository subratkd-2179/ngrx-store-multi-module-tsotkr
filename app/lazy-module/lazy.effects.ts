import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";

import { GET_LAZY, GET_LAZY_SUCCESS } from "./lazy.reducers";

@Injectable()
export class LazyEffects {
  constructor( private actions$ : Actions  ) {}

  @Effect() getLazy$ = this.actions$  
    .ofType(GET_LAZY)
    .switchMap(
      (action: any) =>
        Observable
          .timer(1000)     //faking http request
          .mapTo({type: GET_LAZY_SUCCESS, payload: {lazy: 'lazy'}})
    );
}