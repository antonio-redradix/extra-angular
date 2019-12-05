import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciasDetailComponent } from './denuncias-detail.component';

describe('DenunciasDetailComponent', () => {
  let component: DenunciasDetailComponent;
  let fixture: ComponentFixture<DenunciasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenunciasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
