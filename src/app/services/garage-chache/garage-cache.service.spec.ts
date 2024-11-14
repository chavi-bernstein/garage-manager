import { TestBed } from '@angular/core/testing';

import { GarageCacheService } from './garage-cache.service';

describe('GarageCacheService', () => {
  let service: GarageCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarageCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
