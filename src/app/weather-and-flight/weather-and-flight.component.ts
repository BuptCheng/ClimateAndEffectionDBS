import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { NgStyle } from '@angular/common';
export class Airline {
  constructor(public name: string) { }
}


@Component({
  selector: 'app-weather-and-flight',
  templateUrl: './weather-and-flight.component.html',
  styleUrls: ['./weather-and-flight.component.css']
})
export class WeatherAndFlightComponent implements OnInit {

  constructor() { }

  myControl = new FormControl();

  options = [
    new Airline('UA'),
    new Airline('AA'),
    new Airline('Delta')
  ];

  filteredOptions: Observable<Airline[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | Airline>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this.filter(name) : this.options.slice())
      );
  }

  filter(name: string): Airline[] {
    return this.options.filter(option =>
      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayFn(user?: Airline): string | undefined {
    return user ? user.name : undefined;
  }

  //ngOnInit() {
  //}

}
