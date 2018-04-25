import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource,MatPaginator} from '@angular/material';
import {Felement} from '../felement.model';
import {Welement} from '../../climate/welement.model';
import {PostandgetService} from '../../shared/postandget.service';
import {SearchfilterService} from '../../shared/searchfilter.service';

@Component({
  selector: 'app-flightlist',
  templateUrl: './flightlist.component.html',
  styleUrls: ['./flightlist.component.css']
})
export class FlightlistComponent implements AfterViewInit{
  displayedColumns = [];
  dataSource: MatTableDataSource<Felement> = new MatTableDataSource<Felement>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private pgservice: PostandgetService ,
  private sfservice: SearchfilterService) {
    // Create 100 users
    // Assign the data to the data source for the table to render
  }
  onGet(){
    const date = 'date='+this.sfservice.flightdate.getFullYear()
      +'-'+(this.sfservice.flightdate.getMonth()+1)+'-'+this.sfservice.flightdate.getDay();
    const start = 'ori=' + this.sfservice.startlocation;
    const end = 'dest=' + this.sfservice.destinationlocation;
    this.pgservice.getFlightDatafromdatabase('listFlightDateLoc?'+date+'&'+start+'&'+end)
      .subscribe(
        (ELEMENT: Felement[]) => {this.dataSource.data = ELEMENT,
          this.addcolumns(ELEMENT[0])},
        (error) => console.log(error)
      );
  }
  // 'date', 'airlineNumber', 'originAirport', 'destAirport'
  addcolumns(input: Felement){
    this.displayedColumns = [];
    if(input.flightId.date != null)this.displayedColumns.push('date');
    if(input.flightId.flightNum != null
    &&input.flightId.airline.code != null)this.displayedColumns.push('airlineNumber');
    if(input.flightId.originAirport != null)this.displayedColumns.push('originAirport');
    if(input.destAirport != null)this.displayedColumns.push('destAirport');
  }
  ngAfterViewInit() {
    console.log(this.sfservice.startlocation);
    console.log(this.sfservice.destinationlocation);
    this.onGet();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
