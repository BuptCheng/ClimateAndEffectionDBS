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
  displayedColumns = ['date', 'desc', 'temperature'];
  dataSource: MatTableDataSource<Welement> = new MatTableDataSource<Welement>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private pgservice: PostandgetService,
              private cdservice: SearchfilterService){
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
    this.onGet();
    this.startdate = this.cdservice.startdate;
    this.enddate = this.cdservice.enddate;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onGet(){
    this.pgservice.getData()
      .subscribe(
        (ELEMENT: Welement[]) => this.dataSource.data = ELEMENT,
        (error) => console.log(error)
      );
  }
  onshow() {
    this.dataSource = new MatTableDataSource<Welement>(this.pgservice.CUR_ELEMENT_DATA);
  }
}
export interface element{
  date:string;
  desc:string;
  temperature:number;
}
