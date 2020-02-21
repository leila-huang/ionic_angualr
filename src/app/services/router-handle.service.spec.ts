import { TestBed } from '@angular/core/testing';

import { RouterHandleService } from './router-handle.service';

describe('RouterHandleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouterHandleService = TestBed.get(RouterHandleService);
    expect(service).toBeTruthy();
  });
});
