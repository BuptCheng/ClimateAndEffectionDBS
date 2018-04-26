import { Component, OnInit } from '@angular/core';
import {PostandgetService} from '../shared/postandget.service';
import {MatDatepickerInputEvent, MatTableDataSource} from '@angular/material';
import {SearchfilterService} from '../shared/searchfilter.service';
import {Welement} from './welement.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css'],
})
export class ClimateComponent implements OnInit {
  startdate = new Date(2015,0,3);
  enddate = new Date(2015,1,20);
  city: string = 'San Diego';
  startFilter = (d: Date): boolean => {
    const year = d.getFullYear();
    if(this.enddate === null) return year === 2015;
    return year >= 2012 && year <= 2015 && d<this.enddate;
  };
  endFilter = (d: Date): boolean => {
    const year = d.getFullYear();
    return year >= 2012 && year <= 2015 && this.startdate<d;
  };
//  myControl = new FormControl();
  constructor(private pgservice: PostandgetService ,
  private sfservice: SearchfilterService) { }

  onsubmit(){
    this.sfservice.startdate = this.startdate;
    this.sfservice.enddate = this.enddate;
    this.sfservice.city = this.city;
  }
  onreset(){
    this.startdate = null;
    this.enddate = null;
    this.city = '';
  }
  autocheck(){
    //console.log(this.enddate.toDateString()+this.startdate.toDateString()+this.city);
    return this.enddate===null||this.startdate===null||this.city==='';
  }
  ngOnInit() {
  }
  cities: string[] = ['Boston','Vancouver','Portland','San Francisco',
    'Seattle'	,'Los Angeles',	'San Diego'	,'Las Vegas', 'Phoenix',
    '	Albuquerque', 'Denver'	, 'San Antonio', 'Dallas' ,	'Houston',
    'Kansas City', 'Minneapolis'	, 'Saint Louis'	,
    'Chicago'	,'Nashville'	,'Indianapolis',	'Atlanta',	'Detroit',
    'Jacksonville',	'Charlotte',	'Miami',	'Pittsburgh',
    'Toronto',	'Philadelphia',	'New York'	,
    'Montreal	','Beersheba',	'Tel Aviv District'	,
    'Eilat'	, 'Haifa'	,'Nahariyya',	'Jerusalem',
  ];

}
