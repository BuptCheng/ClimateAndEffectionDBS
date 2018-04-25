import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  oracleurl: string = 'http://localhost:8080/weather';//not sure about the URL???????

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

  getDelayResults(myobj) {
    console.log("dataService: getDelayResults(): " + JSON.stringify(myobj));
    return this._http.get(this.oracleurl + "getDelayResults", myobj)
      .map(result => this.result = result.json());
  }

  getFeedbacks(myobj) {
    console.log("dataService: getDelayResults(): " + JSON.stringify(myobj));
    return this._http.get(this.oracleurl + "getFeedbacks", myobj)
      .map(result => this.result = result.json());
  }
}

