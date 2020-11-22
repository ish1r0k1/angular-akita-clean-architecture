import { Injectable } from '@angular/core';
import { withTransaction } from '@datorama/akita';
import { UseCase } from '../../../core/usecase';
import { AuthUserMapper } from '../mappers/auth-user-mapper';
import { AuthService } from '../services/auth.service';
import { AuthStore } from '../state/auth.store';
import { SetUserStateOnSuccessUseCase } from './set-user-state-on-success.usecase';

@Injectable({
  providedIn: 'root',
})
export class CheckSessionUseCase implements UseCase<void> {
  private mapper = new AuthUserMapper();

  constructor(
    private authService: AuthService,
    private authStore: AuthStore,
    private setUserStateOnSuccess: SetUserStateOnSuccessUseCase
  ) {}

  execute() {
    this.authService
      .getAuthState()
      .pipe(
        withTransaction((response) => {
          if (response) {
            const user = this.mapper.mapFrom(response);

            console.log(`CheckSession: ${user.displayName} is logged in`);

            this.setUserStateOnSuccess.execute(user);
          } else {
            console.log('CheckSession: no user found');
          }

          this.authStore.update((state) => {
            state.initialized = true;
          });
        })
      )
      .toPromise();
  }
}
