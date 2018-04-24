import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material';
import {PostandgetService} from '../shared/postandget.service';
import {SearchfilterService} from '../shared/searchfilter.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  startdestination:string = 'MCO';
  enddestination:string ='SJC';
  date = new Date(2012,0, 1) ;
  constructor(private pgservice: PostandgetService ,
              private sfservice: SearchfilterService) { }
  onsubmit(){
  this.sfservice.startlocation = this.startdestination;
  this.sfservice.destinationlocation = this.enddestination;
  this.sfservice.flightdate = this.date.toDateString();
  console.log(this.date.toDateString());
  }

  onreset(){
    this.startdestination = '';
    this.enddestination = '';
    this.date = null;
  }
  ngOnInit() {
  }

}
