import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStepperComponent } from './ngx-stepper.component';

describe('NgxStepperComponent', () => {
  let component: NgxStepperComponent;
  let fixture: ComponentFixture<NgxStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
