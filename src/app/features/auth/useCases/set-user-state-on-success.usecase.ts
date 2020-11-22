import { Injectable } from '@angular/core';
import { UseCase } from '../../../core/usecase';
import { User } from '../../../domain/user';
import { AuthStore } from '../state/auth.store';

@Injectable({
  providedIn: 'root',
})
export class SetUserStateOnSuccessUseCase implements UseCase<User> {
  constructor(private authStore: AuthStore) {}

  execute(user: User) {
    this.authStore.update((state) => {
      state.user = user;
      state.initialized = true;
    });
  }
}
