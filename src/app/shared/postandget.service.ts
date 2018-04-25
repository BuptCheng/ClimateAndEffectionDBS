import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Welement} from '../climate/welement.model';
import {MatTableDataSource} from '@angular/material';
import {Felement} from '../flight/felement.model';

@Injectable()
export  class PostandgetService {
  myurl = 'https://angularpractice-3696c.firebaseio.com/';
  oracleurl: string = 'http://localhost:8080/';
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
  getWeatherDatafromdatabase(condition:string) {
    const headers =new Headers({'Access-Control-Allow-Origin':'*',
      'content-type':'application/json'} );
    console.log(condition);
    return this.http.get(this.oracleurl+'weather/'+condition ,{headers: headers})
      .map(
        (response: Response) => {
          const data:Welement[] = response.json();
          console.log(data);
          return data;
        }
      );
  }
  getFlightDatafromdatabase(condition:string) {
    const headers =new Headers({'Access-Control-Allow-Origin':'*',
      'content-type':'application/json'} );
    console.log(condition);
    return this.http.get(this.oracleurl+condition ,{headers: headers})
      .map(
        (response: Response) => {
          console.log(response);
          const data:Felement[] = response.json();
          console.log(data);
          return data;
        }
      );
  }
  getFcodeDatafromdatabase(condition:string) {
    const headers =new Headers({'Access-Control-Allow-Origin':'*',
      'content-type':'text/plain;charset=UTF-8'} );
    return this.http.get(this.oracleurl+condition ,{headers: headers})
      .map(
        (response: Response) => {
          const data = response.text();
          return data;
        }
      );
  }
  CUR_ELEMENT_DATA: Welement[] = [];

}
