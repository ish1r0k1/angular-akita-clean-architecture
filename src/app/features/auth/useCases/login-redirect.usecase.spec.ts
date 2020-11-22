import { TestBed } from '@angular/core/testing';

import { LoginRedirectUseCase } from './login-redirect.usecase';

describe('LoginRedirectUseCase', () => {
  let service: LoginRedirectUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginRedirectUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
