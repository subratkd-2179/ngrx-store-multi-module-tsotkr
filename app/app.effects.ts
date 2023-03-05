import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";

import { GET_X, GET_X_SUCCESS } from "./app.reducers";
import { XService } from './x.service';

@Injectable()
export class AppEffects {
  constructor( 
    private actions$ : Actions, 
    private xService : XService 
  ) {}

  @Effect() getX$ = this.actions$  
    .ofType(GET_X)
    .switchMap(
      (action: any) =>
        this.xService.getX()
          .map(x => ({type: GET_X_SUCCESS, payload: x}))
    );

}