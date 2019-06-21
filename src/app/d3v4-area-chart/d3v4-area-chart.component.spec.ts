import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3v4AreaChartComponent } from './d3v4-area-chart.component';

describe('D3v4AreaChartComponent', () => {
  let component: D3v4AreaChartComponent;
  let fixture: ComponentFixture<D3v4AreaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3v4AreaChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3v4AreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
