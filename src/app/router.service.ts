import {EventEmitter} from '@angular/core';

export class RouterService {
  targetpage = 'query';
  pagechanged = new EventEmitter();
  updatatargetpage(input: string) {
    this.targetpage = input;
  }
}
