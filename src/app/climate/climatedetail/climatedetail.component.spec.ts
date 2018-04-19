import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimatedetailComponent } from './climatedetail.component';

describe('ClimatedetailComponent', () => {
  let component: ClimatedetailComponent;
  let fixture: ComponentFixture<ClimatedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimatedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimatedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
