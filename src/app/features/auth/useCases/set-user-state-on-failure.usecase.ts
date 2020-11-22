import { Injectable } from '@angular/core';
import { UseCase } from '../../../core/usecase';
import { AuthStore } from '../state/auth.store';
import { LoginRedirectUseCase } from './login-redirect.usecase';

@Injectable({
  providedIn: 'root',
})
export class SetUserStateOnFailureUseCase implements UseCase<void> {
  constructor(
    private authStore: AuthStore,
    private loginRedirect: LoginRedirectUseCase
  ) {}

  execute() {
    this.authStore.update((state) => {
      state.user = null;
    });

    this.loginRedirect.execute();
  }
}
