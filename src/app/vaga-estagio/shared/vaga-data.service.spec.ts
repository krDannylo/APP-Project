import { TestBed } from '@angular/core/testing';

import { VagaDataService } from './vaga-data.service';

describe('VagaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VagaDataService = TestBed.get(VagaDataService);
    expect(service).toBeTruthy();
  });
});
