import { TestBed } from '@angular/core/testing';

import { CheckSessionUseCase } from './check-session.usecase';

describe('CheckSessionUseCase', () => {
  let service: CheckSessionUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckSessionUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
