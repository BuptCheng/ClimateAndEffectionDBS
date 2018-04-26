import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import {FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  usernameControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);

  users: Array<any>;
  constructor(private _dataService: DataService) { 
   
  }

  ngOnInit() {
  }

  insertNewUser(_username, _password){
  
    console.log("app.conponent.ts(), insertUser() called... name: " + _username + ", _password: " + _password);
    
    var myobj = { NAME: _username, PASSWORD: _password };
    this._dataService.insertNewUser(myobj)
      .subscribe(res => this.users = res);    

      
  }  
}
