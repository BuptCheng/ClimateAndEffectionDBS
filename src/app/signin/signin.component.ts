import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signin', 
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],

})

export class SigninComponent implements OnInit {

  notsigned : boolean = true;

  constructor() { }

  ngOnInit() {
  }
  
  statecheck(notsigned: any){
    this.notsigned = false;
  }
}




