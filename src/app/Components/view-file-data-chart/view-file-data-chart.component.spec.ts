import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFileDataChartComponent } from './view-file-data-chart.component';

describe('ViewFileDataChartComponent', () => {
  let component: ViewFileDataChartComponent;
  let fixture: ComponentFixture<ViewFileDataChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFileDataChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFileDataChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
