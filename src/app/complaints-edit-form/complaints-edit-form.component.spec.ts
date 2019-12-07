import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsEditFormComponent } from './complaints-edit-form.component';

describe('ComplaintsEditFormComponent', () => {
  let component: ComplaintsEditFormComponent;
  let fixture: ComponentFixture<ComplaintsEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintsEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
