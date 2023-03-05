import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { XService } from './x.service';

import { appReducers } from './app.reducers';
import { AppEffects } from './app.effects';

import { LazyModule } from './lazy-module/lazy.module';
 
 const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'lazy', loadChildren: './lazy-module/lazy.module#LazyModule'}
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
    StoreModule.forRoot({state: appReducers}, {initialState: () => {}}),
    EffectsModule.forRoot([AppEffects]),
    LazyModule
  ],
  declarations: [ AppComponent, HomeComponent ],
  providers: [ XService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}