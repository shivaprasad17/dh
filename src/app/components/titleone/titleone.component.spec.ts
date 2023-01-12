import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleoneComponent } from './titleone.component';

describe('TitleoneComponent', () => {
  let component: TitleoneComponent;
  let fixture: ComponentFixture<TitleoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
