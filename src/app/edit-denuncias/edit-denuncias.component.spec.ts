import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDenunciasComponent } from './edit-denuncias.component';

describe('EditDenunciasComponent', () => {
  let component: EditDenunciasComponent;
  let fixture: ComponentFixture<EditDenunciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDenunciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDenunciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
