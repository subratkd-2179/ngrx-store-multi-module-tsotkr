// feature.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LazyComponent }   from './lazy.component';
import { routing } from './lazy.routing';
import { reducers } from  './lazy.reducers';
import { LazyEffects } from './lazy.effects';
import { LazySharedService } from  './lazy-shared.service';

@NgModule({
  imports: [
    routing,
    StoreModule.forFeature('lazy', reducers),
    EffectsModule.forFeature([LazyEffects])
  ],
  declarations: [LazyComponent],
  providers: [LazySharedService]
})
export class LazyModule {}