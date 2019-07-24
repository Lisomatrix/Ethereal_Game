import { TestBed } from '@angular/core/testing';

import { AsteroidService } from './asteroid.service';

describe('AsteroidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsteroidService = TestBed.get(AsteroidService);
    expect(service).toBeTruthy();
  });
});
