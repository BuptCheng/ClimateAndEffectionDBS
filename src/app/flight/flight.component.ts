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
  startdate:string ;
  enddate: string ;
  constructor(private pgservice: PostandgetService ,
              private cdservice: SearchfilterService) { }
  addstartdate(event:MatDatepickerInputEvent<Date>){
    this.startdate = event.value.toLocaleDateString();
    this.cdservice.startdate = this.startdate;
    // this.startdate = this.startdate.substr(0,this.startdate.length-1);
  }
  addenddate(event:MatDatepickerInputEvent<Date>){
    this.enddate = event.value.toLocaleDateString();
    this.cdservice.enddate = this.enddate;
  }

  ngOnInit() {
  }

}
