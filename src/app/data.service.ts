import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {Welement} from './climate/welement.model';

@Injectable()
export class DataService {

  oracleurl: string = 'http://localhost:8080/';    //not sure about the URL???????

  result: any;

  constructor(private _http: Http) {
  }

  getUsers(myobj: any) {
    const headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json'
    });

    var username = myobj['NAME'];
    var password = myobj['PASSWORD'];
    var newUrl = "http://localhost:8080/signIn?name=" + username + "&password=" + password;
    console.log("getDelayResults() newUrl: " + newUrl);
    return this._http.get(newUrl, {headers: headers})
      .map(result => this.result = result.json());
  }

  insertNewUser(myobj: any): Observable<any> {
    const headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json'
    });

    console.log("dataService: insertNewUser() myobj: " + JSON.stringify(myobj));
    console.log("dataService: insertNewUser() myobj: " + myobj);

    var newUrl = "http://localhost:8080/signUp";
    return this._http.post(newUrl, myobj, {headers: headers})
      .map((res: any) => {
        return res.json();
      });
  }


  getResults(condition: string) {
    console.log(this.oracleurl + condition);
    const headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json'
    });
    return this._http.get(this.oracleurl + condition, {headers: headers})
      .map(
        (response: Response) => {
          const data: any[] = response.json();
          return data;
        }
      );
  }

  updateUser(myobj: any): Observable<any> {
    const headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json'
    });

    console.log("dataService: insertNewUser() myobj: " + JSON.stringify(myobj));
    console.log("dataService: insertNewUser() myobj: " + myobj);

    var newUrl = "http://localhost:8080/signUp";
    return this._http.post(newUrl, myobj, {headers: headers})
      .map((res: any) => {
        return res.json();
      });
  }

  deleteUser(myobj: any): Observable<any> {
    const headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json'
    });

    console.log("dataService: deleteUser() myobj: " + JSON.stringify(myobj));
    console.log("dataService: deleteUser() myobj: " + myobj);
    var username = myobj['NAME'];
    var newUrl = "http://localhost:8080/deleteUser" + username;
    return this._http.post(this.oracleurl + "/deleteUser", myobj, {headers: headers})
      .map((res: any) => {
        return res.json();
      });
  }

  getFeedbacks(condition: string) {
    const headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json'
    });
    console.log(condition);
    //console.log("dataService: getFeedbacks(): " + JSON.stringify(myobj));
    //console.log("dataService: getFeedbacks(): " + myobj);
    return this._http.get(this.oracleurl + "insight/queryTweetSentiment" + condition, {headers: headers})
      .map(result => this.result = result.json());
  }
}

