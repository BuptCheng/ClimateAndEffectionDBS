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
  startdate = new Date(2015,0, 1) ;
  enddate  = new Date(2015,1, 1) ;
  city: string = ;
  constructor(private pgservice: PostandgetService ,
              private sfservice: SearchfilterService) { }
  onsubmit(){
    this.sfservice.startdate = this.startdate.toLocaleDateString();
    this.sfservice.enddate = this.enddate.toLocaleDateString();
    this.sfservice.city = this.city;
  }

  ngOnInit() {
  }

}
