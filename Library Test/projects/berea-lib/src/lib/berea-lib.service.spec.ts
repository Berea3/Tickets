import { TestBed } from '@angular/core/testing';

import { BereaLibService } from './berea-lib.service';

describe('BereaLibService', () => {
  let service: BereaLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BereaLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
