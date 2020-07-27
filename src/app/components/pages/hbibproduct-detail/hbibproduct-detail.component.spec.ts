import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HbibproductDetailComponent } from './hbibproduct-detail.component';

describe('HbibproductDetailComponent', () => {
  let component: HbibproductDetailComponent;
  let fixture: ComponentFixture<HbibproductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbibproductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HbibproductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
