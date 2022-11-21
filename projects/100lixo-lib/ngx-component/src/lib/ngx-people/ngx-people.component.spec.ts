import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPeopleComponent } from './ngx-people.component';

describe('NgxPeopleComponent', () => {
  let component: NgxPeopleComponent;
  let fixture: ComponentFixture<NgxPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
