import { TestBed } from '@angular/core/testing';

import { PickaxeService } from './pickaxe.service';

describe('PickaxeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PickaxeService = TestBed.get(PickaxeService);
    expect(service).toBeTruthy();
  });
});
