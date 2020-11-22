import { TestBed } from '@angular/core/testing';

import { LoginWithGoolgeUseCase } from './login-with-goolge.usecase';

describe('LoginWithGoolgeUseCase', () => {
  let service: LoginWithGoolgeUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginWithGoolgeUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
