import { TestBed } from '@angular/core/testing';

import { TempatwisataService } from './tempatwisata.service';

describe('TempatwisataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempatwisataService = TestBed.get(TempatwisataService);
    expect(service).toBeTruthy();
  });
});
