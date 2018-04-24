import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFcresultComponent } from './search-fcresult.component';

describe('SearchFcresultComponent', () => {
  let component: SearchFcresultComponent;
  let fixture: ComponentFixture<SearchFcresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFcresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFcresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
