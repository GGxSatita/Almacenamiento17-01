import { TestBed } from '@angular/core/testing';

import { RecordarUserGuard } from './recordar-user.guard';

describe('RecordarUserGuard', () => {
  let guard: RecordarUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RecordarUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
