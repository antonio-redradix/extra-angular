import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsAddComponent } from './complaints-add.component';

describe('ComplaintsAddComponent', () => {
  let component: ComplaintsAddComponent;
  let fixture: ComponentFixture<ComplaintsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
