import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByItemComponent } from './sales-by-item.component';

describe('SalesByItemComponent', () => {
  let component: SalesByItemComponent;
  let fixture: ComponentFixture<SalesByItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesByItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesByItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
