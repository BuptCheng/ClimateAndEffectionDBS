import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Welement} from '../welement.model';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-climatelist',
  templateUrl: './climatelist.component.html',
  styleUrls: ['./climatelist.component.css']
})
export class ClimatelistComponent implements OnInit,  AfterViewInit {

  displayedColumns = ['Wid', 'desc', 'temperature'];
  dataSource = new MatTableDataSource<Welement>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
 //   this.dataSource.paginator = this.paginator;
    // ELEMENT_DATA
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


const ELEMENT_DATA: Welement[] = [
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 2, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 3, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 4, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 5, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 6, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 7, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 8, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 9, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 10, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 11, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 12, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 13, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
  {Wid: 1, desc: 'Hydrogen', temperature: 1.0079},
];
