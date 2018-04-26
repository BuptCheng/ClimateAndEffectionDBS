import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from './../data.service';

@Component({
  selector: 'app-weather-and-flight-result',
  templateUrl: './weather-and-flight-result.component.html',
  styleUrls: ['./weather-and-flight-result.component.css']
})
export class WeatherAndFlightResultComponent implements OnInit {

    airport: any;
    month: any;
    day: any;
    year: any;
    delayDate: any[];
    delayresults: Array<any>;
    condition:string;

  constructor(
    private _dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
    ) {

      this.airport = this.route.snapshot.paramMap.get('airport');
      this.month = this.route.snapshot.paramMap.get('month');
      this.day = this.route.snapshot.paramMap.get('day');
      this.year = this.route.snapshot.paramMap.get('year');
      console.log("Airport " + this.airport);

      this.condition = 'insight/queryDelay?airport='+this.airport+'&date='+this.year + "-" + this.month + "-" + this.day;
      console.log(this.condition);
        this._dataService.getResults(this.condition)
              .subscribe((res:any[]) => {
                for(const ele of res ){
                  ele.value = ele.value * 100 ;
                  ele.label=ele.key;
                  delete ele.key;
                }
                this.delayresults = res;
                console.log(this.delayresults);
                this.adddataSource();
          });

   }
  adddataSource(){
    this.dataSource = {
      "chart": {
        "caption": "Delay Rate in "+this.year + "-" + this.month + "-" + this.day,
        "subCaption": "At "+this.airport,
        "numberSuffix": "%",
        "decimals":"2",
        "theme": "fint",
        "yAxisMaxValue": "100",
        "yAxisMinValue": "0",
        "allowPinMode":0,
      },
      "data": this.delayresults
    }
  }
  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  id = 'chart1';
    width = 600;
    height = 400;
    type = 'column2d';
    dataFormat = 'json';
    dataSource;
    title = 'Delay Results';

    chartDate = [
                  {
                      "label": "Bakersfield Central",
                      "value": "880000"
                  },
                  {
                      "label": "Garden Groove harbour",
                      "value": "730000"
                  },
                  {
                      "label": "Los Angeles Topanga",
                      "value": "590000"
                  },
                  {
                      "label": "Compton-Rancho Dom",
                      "value": "520000"
                  },
                  {
                      "label": "Daly City Serramonte",
                      "value": "330000"
                  }
              ];


}
