import { Component, OnInit } from '@angular/core';
import {Weatherele} from '../../shared/weatherele.model';

@Component({
  selector: 'app-querylist',
  templateUrl: './querylist.component.html',
  styleUrls: ['./querylist.component.css']
})
export class QuerylistComponent implements OnInit {
  queryresult: Weatherele[] = [
    new Weatherele(1, 10),
    new Weatherele(2, 15),
    new Weatherele(3, 20),
    new Weatherele(4, 25),
    new Weatherele(5, 30),
  ];
  constructor() { }

  ngOnInit() {
  }

}
