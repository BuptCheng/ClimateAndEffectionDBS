import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReviewAnalysisComponent } from './customer-review-analysis.component';

describe('CustomerReviewAnalysisComponent', () => {
  let component: CustomerReviewAnalysisComponent;
  let fixture: ComponentFixture<CustomerReviewAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReviewAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReviewAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
