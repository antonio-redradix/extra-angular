import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintAppComponent } from './complaint-app.component';

describe('ComplaintAppComponent', () => {
  let component: ComplaintAppComponent;
  let fixture: ComponentFixture<ComplaintAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
