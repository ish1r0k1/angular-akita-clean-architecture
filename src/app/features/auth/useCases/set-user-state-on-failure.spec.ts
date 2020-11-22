import { TestBed } from '@angular/core/testing';

import { SetUserStateOnFailureUseCase } from './set-user-state-on-failure.usecase';

describe('SetUserStateOnFailureUseCase', () => {
  let service: SetUserStateOnFailureUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetUserStateOnFailureUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
