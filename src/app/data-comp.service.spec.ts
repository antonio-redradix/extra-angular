import { TestBed } from '@angular/core/testing';

import { DataCompService } from './data-comp.service';

describe('DataCompService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCompService = TestBed.get(DataCompService);
    expect(service).toBeTruthy();
  });
});
