import { TestBed } from '@angular/core/testing';

import { MainlookupService } from './mainlookup.service';

describe('MainlookupService', () => {
  let service: MainlookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainlookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
