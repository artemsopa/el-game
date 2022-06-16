import { TestBed } from '@angular/core/testing';

import { OnpayGuard } from './onpay.guard';

describe('OnpayGuard', () => {
  let guard: OnpayGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnpayGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
