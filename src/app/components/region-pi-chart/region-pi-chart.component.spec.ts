import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionPiChartComponent } from './region-pi-chart.component';

describe('RegionPiChartComponent', () => {
  let component: RegionPiChartComponent;
  let fixture: ComponentFixture<RegionPiChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionPiChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionPiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
