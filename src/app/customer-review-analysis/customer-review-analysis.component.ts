import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from './../data.service';

@Component({
  selector: 'app-customer-review-analysis',
  templateUrl: './customer-review-analysis.component.html',
  styleUrls: ['./customer-review-analysis.component.css']
})
export class CustomerReviewAnalysisComponent implements OnInit {
 
    startdate : String;
    enddate: String;
    condition: String;
    //result: Array<any>;

  // this is the data from server
    result = [
        {
            "key": "United Air Lines Inc.",
            "value": [
                {
                    "key": "positive",
                    "value": 321
                },
                {
                    "kay": "negative",
                    "value": 1569
                },
                {
                    "key": "neutral",
                    "value": 452
                }
            ]
        }, 
    ];
    constructor(private _dataService: DataService,
        private route: ActivatedRoute,
        private location: Location) {
    
    
           // this.condition = '?d1' + this.startdate + '&d2' + this.enddate;
            this.startdate = "2015-2-1";
            this.enddate = "2015-2-28"
          //var myobj = {startdate: this.startdate, enddate: this.enddate };
    
          this._dataService.getFeedbacks('?d1=' + this.startdate + '&d2=' + this.enddate)
                .subscribe((res:any) => {
                  this.result = res;
                  console.log("result getFeedbacks " + JSON.stringify(this.result));
                  // store data to each array
                this.getCategories();
                // store data set to each array
                this.getDataSet();
            });
    /*
          
        this.getCategories();
        // store data set to each array
        this.getDataSet();
        //console.log("dataset: " + JSON.stringify(this.dataset));
*/
        this.dataSource = {
            "chart": {
                "xAxisname": "Airlines",
                "yAxisName": "# of Feedbacks",
                "theme": "fint"
            },
            "categories": [
                {
                    "category": this.categories
                }
            ],
            "dataset": this.dataset        
        }
    }

  

id = 'chart1';
width = 600;
height = 400;
type = 'mscolumn2d';
dataFormat = 'json';
dataSource;
title = 'Airline Feedbacks';

categories:any[] = new Array(this.result.length);  
// positive, neutral, and negative
dataset = [
    {
        "seriesname": "positive",
        "data": []                
    },
    {
        "seriesname": "negative",
        "data": []
    },
    {
        "seriesname": "neutral",
        "data": []
    }
];
data0:any[] = new Array(this.result.length);  
data1:any[] = new Array(this.result.length);  
data2:any[] = new Array(this.result.length);  

getCategories(){
    for (var i = 0; i < this.result.length; i++) {
       // console.log("result[i]: " + this.result[i]);
      //  console.log("result[i] string: " + JSON.stringify(this.result[i]));
       // console.log("result[i]['label']: " + this.result[i]['label']);
        if (this.result[i]['value'].length == 0){
            this.result.splice(i,1);
            i--;
            continue;
        }
        this.categories[i] = {"label": this.result[i]['key']};
        console.log(" "+ this.categories[i]);
    }
}


getDataSet(){
    // series 0: positive
    // series 1: negative
    // series 2: neutral
    for (var i = 0; i < this.result.length; i++) {     
        var feedbackValue = this.result[i]['value'];
        //console.log("feedbackValue: " + JSON.stringify(feedbackValue));  
        //console.log("feedbackValue[0][value]: " + JSON.stringify(feedbackValue[0]['value'])); 
        if (feedbackValue.length != 0){
            this.data0[i] = {"value": feedbackValue[0]['value']};
            this.data1[i] = {"value": feedbackValue[1]['value']};
            this.data2[i] = {"value": feedbackValue[2]['value']};
            
        } 
        else {
            continue;
        }
    }

    this.dataset[0]['data'] = this.data0;
    this.dataset[1]['data'] = this.data1;
    this.dataset[2]['data'] = this.data2;
}





ngOnInit() {
}

}
