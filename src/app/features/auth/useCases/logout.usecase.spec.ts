import { TestBed } from '@angular/core/testing';

import { LogoutUseCase } from './logout.usecase';

describe('LogoutUseCase', () => {
  let service: LogoutUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoutUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
