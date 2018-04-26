import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {DataService} from '../data.service';


@Component({
  selector: 'app-hottest-and-coldest-analysis',
  templateUrl: './hottest-and-coldest-analysis.component.html',
  styleUrls: ['./hottest-and-coldest-analysis.component.css']
})
export class HottestAndColdestAnalysisComponent implements OnInit {
  id1 = 'chart1';
  width1 = 600;
  height1 = 400;
  type1 = 'column2d';
  dataFormat1 = 'json';
  dataSource1;
  id2 = 'chart2';
  width2 = 600;
  height2 = 400;
  type2 = 'column2d';
  dataFormat2 = 'json';
  dataSource2;
  thedate;
  year ='2015';
  mouth = '1';
  hottest:any[] =[{"label": "Boston",
    "value": "880000"},{"label": "Boston",
    "value": "880000"},{"label": "Boston",
    "value": "880000"},{"label": "Boston",
    "value": "880000"},{"label": "Boston",
    "value": "880000"}];
  coldest: any[]=[{"label": "Boston",
    "value": "880000"},{"label": "Boston",
    "value": "880000"},{"label": "Boston",
    "value": "880000"},{"label": "Boston",
    "value": "880000"},{"label": "Boston",
    "value": "880000"}];
  condition:string;
  constructor(private location: Location,
  private _dataService:DataService) {
    //this.search();
    this.adddataSource();
  }
  search(){
    this.condition='weather/coldestcitybymonth?month='+this.year+'-'+this.mouth;
    this._dataService.getResults(this.condition)
      .subscribe((res:any[]) => {
        for(const ele of res ){
          ele.label=ele.city;
          ele.value=ele.temperature;
        }
        this.coldest = res;
      });
    this.condition='weather/hottestcitybymonth?month='+this.year+'-'+this.mouth;
    this._dataService.getResults(this.condition)
      .subscribe((res:any[]) => {
        for(const ele of res ){
          ele.label=ele.city;
          ele.value=ele.temperature;
        }
        this.hottest = res;
        this.adddataSource();
      });
  }
  adddataSource(){
    this.dataSource1 = {
      "chart": {
        "caption": "Delay Rate in ",
        "subCaption": "At ",
        "theme": "fint",
        "yAxisMaxValue": "300",
        "yAxisMinValue": "250",
        "allowPinMode":0,
      },
      "data": this.coldest
    }
    this.dataSource2 = {
      "chart": {
        "caption": "Delay Rate in ",
        "subCaption": "At ",
        "theme": "fint",
        "yAxisMaxValue": "300",
        "yAxisMinValue": "250",
        "allowPinMode":0,
      },
      "data": this.hottest
    }
  }

  ngOnInit() {
  }

}
