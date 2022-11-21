import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNoContentComponent } from './ngx-no-content.component';

describe('NgxNoContentComponent', () => {
  let component: NgxNoContentComponent;
  let fixture: ComponentFixture<NgxNoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNoContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
