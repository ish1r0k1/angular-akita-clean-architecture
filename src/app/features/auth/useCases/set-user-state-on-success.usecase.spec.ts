import { TestBed } from '@angular/core/testing';

import { SetUserStateOnSuccessUseCase } from './set-user-state-on-success.usecase';

describe('SetUserStateOnSuccessUseCase', () => {
  let service: SetUserStateOnSuccessUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetUserStateOnSuccessUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
