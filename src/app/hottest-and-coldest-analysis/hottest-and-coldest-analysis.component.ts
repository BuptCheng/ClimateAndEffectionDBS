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
  year:number =2015;
  month:number =1;
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
    this.search();
    //this.adddataSource();
  }
  search(){
    this.condition='weather/coldestcitybymonth?month='+this.year+'-'+this.month;
    this._dataService.getResults(this.condition)
      .subscribe((res:any[]) => {
        for(const ele of res ){
          ele.label=ele.city;
          ele.value=ele.temperature-273;
        }
        this.coldest = res;
      });
    setTimeout(500);
    this.condition='weather/hottestcitybymonth?month='+this.year+'-'+this.month;
    this._dataService.getResults(this.condition)
      .subscribe((res:any[]) => {
        for(const ele of res ){
          ele.label=ele.city;
          ele.value=ele.temperature-273;
        }
        this.hottest = res;
        this.adddataSource();
      });
  }
  years:number[]=[2012,2013,2014,2015];
  months:number[]=[1,2,3,4,5,6,7,8,9,10,11,12];
  adddataSource(){
    this.dataSource1 = {
      "chart": {
        "caption": "Top 5 Hotest Citis and its Temperature",
        "subCaption": "",
        "decimals":"2",
        "theme": "fint",
        "yAxisMaxValue": "100",
        "yAxisMinValue": "0",
        "allowPinMode":0,
      },
      "data": this.coldest
    }
    setTimeout(500);
    this.dataSource2 = {
      "chart": {
        "caption": "Top 5 Coldest Citis and its Temperature",
        "subCaption": "",
        "decimals":"2",
        "theme": "fint",
        "yAxisMaxValue": "100",
        "yAxisMinValue": "0",
        "allowPinMode":0,
      },
      "data": this.hottest
    }
  }

  ngOnInit() {
  }

}
