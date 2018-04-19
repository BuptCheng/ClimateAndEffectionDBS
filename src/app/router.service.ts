import {EventEmitter} from '@angular/core';

export class RouterService {
  targetpage = 'homepage';
  pagechanged = new EventEmitter();
  updatatargetpage(input: string) {
    this.targetpage = input;
  }
}
