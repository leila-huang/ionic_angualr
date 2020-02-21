import { TestBed } from '@angular/core/testing';

import { EventCenterService } from './event-center.service';

describe('EventCenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventCenterService = TestBed.get(EventCenterService);
    expect(service).toBeTruthy();
  });
});
