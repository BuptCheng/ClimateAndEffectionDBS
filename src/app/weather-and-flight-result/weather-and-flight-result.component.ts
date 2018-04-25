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
    delayDate: any;a
    delayresults: Array<any>;

  constructor(
    private _dataService: DataService,
    private route: ActivatedRoute,
    private location: Location) {

      this.airport = this.route.snapshot.paramMap.get('airport');
      this.month = this.route.snapshot.paramMap.get('month');
      this.day = this.route.snapshot.paramMap.get('day');
      this.year = this.route.snapshot.paramMap.get('year');
      console.log("Airport " + this.airport);

      this.delayDate = this.month + "/" + this.day + "/" + this.year;

    
        // Access the Data Service's getUsers() method we defined
        /*
        this._dataService.getUsers()
          .subscribe(res => this.users = res);
        */
        var myobj = { airport: this.airport, delayDate: this.delayDate };
        
        this._dataService.getDelayResults(myobj)
              .subscribe((res:any) => {
                this.delayresults = res;
                /* console.log("student.components get usres: res: " + res);
                console.log("first array: " + JSON.stringify(this.users[0]));
                console.log("name: " + this.users[0].NAME);
                console.log("password: " + this.users[0].PASSWORD);
                */
          });

          this.dataSource = {
            "chart": {
                "caption": "Harry's SuperMart",
                "subCaption": "Top 5 stores in last month by revenue",
                "numberprefix": "$",
                "theme": "fint"
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
