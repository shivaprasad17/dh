import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesBySalesPersonComponent } from './sales-by-sales-person.component';

describe('SalesBySalesPersonComponent', () => {
  let component: SalesBySalesPersonComponent;
  let fixture: ComponentFixture<SalesBySalesPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesBySalesPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesBySalesPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
