import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsEditComponent } from './complaints-edit.component';

describe('ComplaintsEditComponent', () => {
  let component: ComplaintsEditComponent;
  let fixture: ComponentFixture<ComplaintsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
