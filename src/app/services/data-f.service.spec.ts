import { TestBed } from '@angular/core/testing';

import { DataFService } from './data-f.service';

describe('DataFService', () => {
  let service: DataFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
