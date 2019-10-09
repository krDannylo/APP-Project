import { TestBed } from '@angular/core/testing';

import { VagaService } from './vaga.service';

describe('VagaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VagaService = TestBed.get(VagaService);
    expect(service).toBeTruthy();
  });
});
