import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import {FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  usernameControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);
  oldpasswordControl = new FormControl('', [Validators.required]);

  users: Array<any>;
  constructor(private _dataService: DataService) { 
   
  }

  ngOnInit() {
  }

  resetPassword(_username,_newpassword, _oldpassword ){
  
    console.log("app.conponent.ts(), resetPassword() called... name: " + _username + ", _password: " + _newpassword);
    
    var myobj = { name: _username,  newPassword: _newpassword, oldPassword: _oldpassword };
    this._dataService.updateUser(myobj)
      .subscribe(res => this.users = res);    
  }  
}
