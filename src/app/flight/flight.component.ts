import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material';
import {PostandgetService} from '../shared/postandget.service';
import {SearchfilterService} from '../shared/searchfilter.service';
import {Felement} from './felement.model';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  startdestination:string = 'ANC';
  enddestination:string ='SEA';
  date = new Date(2015,0, 1) ;
  constructor(private pgservice: PostandgetService ,
              private sfservice: SearchfilterService) { }
  dateFilter = (d: Date): boolean => {
    const year = d.getFullYear();
    return year === 2012;
  };
  onsubmit(){
    this.getAirportcode();
    this.sfservice.flightdate = this.date;
  }
  getAirportcode(){
    this.changestartinput();
    this.changeendinput();
  }
  autocheck(){
    return this.startdestination===''||this.enddestination===''||this.date===null;
  }
  changestartinput(){
    this.pgservice.getFcodeDatafromdatabase('findAirportCode?code='+this.startdestination)
      .subscribe(
        (ELEMENT: string) => {this.sfservice.startlocation = ELEMENT,
          console.log(ELEMENT)},
        (error) => console.log(error)
      );
  }
  changeendinput(){
    this.pgservice.getFcodeDatafromdatabase('findAirportCode?code='+this.enddestination)
      .subscribe(
        (ELEMENT: string) => {this.sfservice.destinationlocation = ELEMENT,
          console.log(ELEMENT)},
        (error) => console.log(error)
      );
  }
  onreset(){
    this.startdestination = '';
    this.enddestination = '';
    this.date = null;
  }
  ngOnInit() {
    this.getAirportcode();
  }

}
