import { Component, OnInit } from '@angular/core';
import {PostandgetService} from '../shared/postandget.service';
import {MatDatepickerInputEvent, MatTableDataSource} from '@angular/material';
import {SearchfilterService} from '../shared/searchfilter.service';
import {Welement} from './welement.model';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css'],
})
export class ClimateComponent implements OnInit {
  startdate:string ;
  enddate: string ;
  selectedValue: string = 'Boston';
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
  foods: string[] = ['Vancouver','Portland','San Francisco',
    'Seattle'	,'Los Angeles',	'San Diego'	,'Las Vegas', 'Phoenix',
    '	Albuquerque', 'Denver'	, 'San Antonio', 'Dallas' ,	'Houston',
    'Kansas City', 'Minneapolis'	, 'Saint Louis'	,
    'Chicago'	,'Nashville'	,'Indianapolis',	'Atlanta',	'Detroit',
    'Jacksonville',	'Charlotte',	'Miami',	'Pittsburgh',
    'Toronto',	'Philadelphia',	'New York'	,
    'Montreal	', 'Boston'	,'Beersheba',	'Tel Aviv District'	,
    'Eilat'	, 'Haifa'	,'Nahariyya',	'Jerusalem',
  ];
  onSave() {
    this.pgservice.storeServers(this.pgservice.ELEMENT_DATA)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
