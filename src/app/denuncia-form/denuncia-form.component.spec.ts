import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaFormComponent } from './denuncia-form.component';

describe('DenunciaFormComponent', () => {
  let component: DenunciaFormComponent;
  let fixture: ComponentFixture<DenunciaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenunciaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
