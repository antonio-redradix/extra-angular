import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDenunciaComponent } from './add-denuncia.component';

describe('AddDenunciaComponent', () => {
  let component: AddDenunciaComponent;
  let fixture: ComponentFixture<AddDenunciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDenunciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
