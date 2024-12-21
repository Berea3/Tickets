import { TestBed } from '@angular/core/testing';

import { BearLibraryService } from './bear-library.service';

describe('BearLibraryService', () => {
  let service: BearLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BearLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
