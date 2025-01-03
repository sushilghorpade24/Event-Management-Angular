import { TestBed } from '@angular/core/testing';

import { EventApisService } from './event-apis.service';

describe('EventApisService', () => {
  let service: EventApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
