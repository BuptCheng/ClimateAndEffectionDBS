import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Welement} from '../climate/welement.model';
import {MatTableDataSource} from '@angular/material';

@Injectable()
export  class PostandgetService {
  myurl = 'https://angularpractice-3696c.firebaseio.com/';
  oracleurl: string = 'http://localhost:8080/weather/';
  constructor(private http: Http) {}
  storeServers(data: any[]) {
    const headers =new Headers({'Access-Control-Allow-Origin':'*'} );
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    console.log(data);
    return this.http.put(this.myurl + 'data.json',
      data,
      {headers: headers});
  }
  getDatafromdatabase(condition:string) {
    const headers =new Headers({'Access-Control-Allow-Origin':'*',
      'content-type':'application/json'} );
    return this.http.get(this.oracleurl+condition ,{headers: headers})
      .map(
        (response: Response) => {
          const data:Welement[] = response.json();
          console.log(data);
          return data;
        }
      );
  }
  getData() {

    return this.http.get(this.myurl + 'data.json')
      .map(
        (response: Response) => {
          const data:Welement[] = response.json();
          console.log(data);
          return data;
        }
      );
  }
  CUR_ELEMENT_DATA: Welement[] = [];

}
