import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciasListComponent } from './denuncias-list.component';

describe('DenunciasListComponent', () => {
  let component: DenunciasListComponent;
  let fixture: ComponentFixture<DenunciasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenunciasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
