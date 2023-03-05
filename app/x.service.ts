import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class XService {

  getX() {    
    return Observable
      .timer(1000)     //faking http request
      .mapTo({x: 1, y:2});
  }
}