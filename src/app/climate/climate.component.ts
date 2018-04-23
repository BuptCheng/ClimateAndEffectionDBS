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
  onSave() {
    this.pgservice.storeServers(this.pgservice.ELEMENT_DATA)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
