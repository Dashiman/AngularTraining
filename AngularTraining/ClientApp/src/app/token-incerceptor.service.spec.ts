import { TestBed } from '@angular/core/testing';

import { TokenIncerceptorService } from './token-incerceptor.service';

describe('TokenIncerceptorService', () => {
  let service: TokenIncerceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenIncerceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
