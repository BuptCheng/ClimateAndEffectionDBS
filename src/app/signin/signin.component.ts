import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import {FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  usernameControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);

  notsigned : boolean = true;
  signed: boolean = false;
  users: Array<any>;
  checkpassword: Array<any>;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  statecheck(_username:any, _password:any){
    // Access the Data Service's getUsers() method we defined
    /*
    this._dataService.getUsers()
      .subscribe(res => this.users = res);
    */
    var myobj = { NAME: _username, PASSWORD: _password };
    
    this._dataService.getUsers(myobj)
          .subscribe((res:any) => {
            this.checkpassword = res;
            /* console.log("student.components get usres: res: " + res);
            console.log("first array: " + JSON.stringify(this.users[0]));
            console.log("name: " + this.users[0].NAME);
            console.log("password: " + this.users[0].PASSWORD);
            */
           if (this.checkpassword[0].name == '') {
            this.notsigned = true;
            this.signed = false;
           }
           else {
            this.notsigned = false;
            this.signed = true;
           }
      
      })
      
    }

}


