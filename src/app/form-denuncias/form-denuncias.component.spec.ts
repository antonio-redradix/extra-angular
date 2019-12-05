import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDenunciasComponent } from './form-denuncias.component';

describe('FormDenunciasComponent', () => {
  let component: FormDenunciasComponent;
  let fixture: ComponentFixture<FormDenunciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDenunciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDenunciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
