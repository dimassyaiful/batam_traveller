import { TestBed } from '@angular/core/testing';

import { TestcrudProviderService } from './testcrud-provider.service';

describe('TestcrudProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestcrudProviderService = TestBed.get(TestcrudProviderService);
    expect(service).toBeTruthy();
  });
});
