import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitletwoComponent } from './titletwo.component';

describe('TitletwoComponent', () => {
  let component: TitletwoComponent;
  let fixture: ComponentFixture<TitletwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitletwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitletwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
