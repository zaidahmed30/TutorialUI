import { TestBed } from '@angular/core/testing';

import { Duration } from './duration';

describe('Duration', () => {
  let service: Duration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Duration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
