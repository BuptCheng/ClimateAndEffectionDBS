import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAndFlightResultComponent } from './weather-and-flight-result.component';

describe('WeatherAndFlightResultComponent', () => {
  let component: WeatherAndFlightResultComponent;
  let fixture: ComponentFixture<WeatherAndFlightResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherAndFlightResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAndFlightResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
