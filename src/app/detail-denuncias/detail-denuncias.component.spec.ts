import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDenunciasComponent } from './detail-denuncias.component';

describe('DetailDenunciasComponent', () => {
  let component: DetailDenunciasComponent;
  let fixture: ComponentFixture<DetailDenunciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDenunciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDenunciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
