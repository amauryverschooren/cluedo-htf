import { TestBed } from '@angular/core/testing';

import { CluedoService } from './cluedo.service';

describe('CluedoService', () => {
  let service: CluedoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CluedoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
