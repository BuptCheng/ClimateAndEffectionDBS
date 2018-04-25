import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Welement} from '../welement.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PostandgetService} from '../../shared/postandget.service';
import {SearchfilterService} from '../../shared/searchfilter.service';

@Component({
  selector: 'app-climatelist',
  templateUrl: './climatelist.component.html',
  styleUrls: ['./climatelist.component.css']
})
export class ClimatelistComponent implements OnInit,  AfterViewInit {
  startdate:string ;
  enddate: string ;
  city:string;
  displayedColumns = [];
  dataSource: MatTableDataSource<Welement> = new MatTableDataSource<Welement>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private pgservice: PostandgetService,
              private sfservice: SearchfilterService){
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
    console.log(this.enddate+this.startdate+this.city);
  }
  ngAfterViewInit() {
   // this.startdate = this.sfservice.startdate;
   // this.enddate = this.sfservice.enddate;
    this.city = this.sfservice.city;
    this.onGet();
    console.log(this.enddate+this.startdate+this.city);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onGet(){
    const start = 'datestart='+this.sfservice.startdate.getFullYear()
    +'-'+(this.sfservice.startdate.getMonth()+1)+'-'+this.sfservice.startdate.getDay();
    const end = 'dateend='+this.sfservice.enddate.getFullYear()
    +'-'+(this.sfservice.enddate.getMonth()+1)+'-'+this.sfservice.enddate.getDay();
    const city = 'city=' + this.sfservice.city;
    this.pgservice.getWeatherDatafromdatabase('daterangeandcity?'+start+'&'+end+'&'+city)
      .subscribe(
        (ELEMENT: Welement[]) => {this.dataSource.data = ELEMENT,
        this.addcolumns(ELEMENT[0])},
        (error) => console.log(error)
      );
  }
  addcolumns(input : Welement){
    this.displayedColumns = [];
    if(input.locationID != null)this.displayedColumns.push('locationID');
    if(input.date != null)this.displayedColumns.push('date');
    if(input.city != null)this.displayedColumns.push('city');
    if(input.latitude != null)this.displayedColumns.push('latitude');
    if(input.longitude != null)this.displayedColumns.push('longitude');
    if(input.temperature != null)this.displayedColumns.push('temperature');
    if(input.humidity != null)this.displayedColumns.push('humidity');
    if(input.pressure != null)this.displayedColumns.push('pressure');
    if(input.windSpeed != null)this.displayedColumns.push('windspeed');
    if(input.windDesc != null)this.displayedColumns.push('desc');
  }
}
