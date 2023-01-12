import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSalesChartComponent } from './item-sales-chart.component';

describe('ItemSalesChartComponent', () => {
  let component: ItemSalesChartComponent;
  let fixture: ComponentFixture<ItemSalesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSalesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSalesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
