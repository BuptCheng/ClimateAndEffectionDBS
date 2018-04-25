import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import {FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  usernameControl = new FormControl('', [Validators.required]);
  

  users: Array<any>;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  deleteUser(_name){
    console.log("app.conponent.ts(), deleteUser() called... name: " + _name);
    
    var myobj = { name: _name};
    this._dataService.deleteUser(myobj)
      .subscribe(res => this.users = res);    
  }  
}
