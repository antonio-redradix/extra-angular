import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsDetailComponent } from './complaints-detail.component';

describe('ComplaintsDetailComponent', () => {
  let component: ComplaintsDetailComponent;
  let fixture: ComponentFixture<ComplaintsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
