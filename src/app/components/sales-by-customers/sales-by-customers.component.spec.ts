import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByCustomersComponent } from './sales-by-customers.component';

describe('SalesByCustomersComponent', () => {
  let component: SalesByCustomersComponent;
  let fixture: ComponentFixture<SalesByCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesByCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesByCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
