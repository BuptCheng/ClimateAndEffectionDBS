import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {Welement} from './climate/welement.model';

@Injectable()
export class DataService {

  oracleurl: string = 'http://localhost:8080/';    //not sure about the URL???????

  result:any;
  constructor(private _http: Http) { }

  getUsers(myobj: any) {
    console.log("dataService: getUsers(): " + JSON.stringify(myobj));

    return this._http.get(this.oracleurl + "/signIn", myobj)
      .map(result => this.result = result.json());
  }

  insertNewUser(myobj:any): Observable<any>{
    console.log("dataService: insertNewUser() myobj: " + JSON.stringify(myobj));
    return this._http.post(this.oracleurl + "/signUp", myobj)
      .map((res:any) => {
        return res.json();
      });
  }

  updateUser(myobj:any): Observable<any>{
    console.log("dataService: updateUser() myobj: " + JSON.stringify(myobj));
    return this._http.post(this.oracleurl + "/changePassword", myobj)
      .map((res:any) => {
        return res.json();
      });
  }

  deleteUser(myobj:any): Observable<any>{
    console.log("dataService: deleteUser() myobj: " + JSON.stringify(myobj));
    console.log("dataService: deleteUser() myobj: " + myobj);
    return this._http.post(this.oracleurl + "/deleteUser", myobj)
      .map((res:any) => {
        return res.json();
      });
  }

  getResults(condition:string) {
    console.log(this.oracleurl + condition);
    const headers =new Headers({'Access-Control-Allow-Origin':'*',
      'content-type':'application/json'} );
    return this._http.get(this.oracleurl + condition,{headers: headers})
      .map(
        (response: Response) => {
          const data:any[] = response.json();
          return data;
        }
      );
  }

  getFeedbacks(myobj) {
    console.log("dataService: getResults(): " + JSON.stringify(myobj));
    return this._http.get(this.oracleurl + "getFeedbacks", myobj)
      .map(result => this.result = result.json());
  }
}

