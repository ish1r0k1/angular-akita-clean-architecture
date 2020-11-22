import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UseCase } from '../../../core/usecase';
import { LOGIN_URI } from '../../../constants';

@Injectable({
  providedIn: 'root',
})
export class LoginRedirectUseCase implements UseCase<void> {
  constructor(private router: Router) {}

  execute() {
    this.router.navigateByUrl(LOGIN_URI);
  }
}
