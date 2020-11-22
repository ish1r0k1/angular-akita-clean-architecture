import { Injectable } from '@angular/core';
import { UseCase } from '../../../core/usecase';
import { User } from '../../../domain/user';
import { AuthUserMapper } from '../mappers/auth-user-mapper';
import { AuthService } from '../services/auth.service';
import { SetUserStateOnFailureUseCase } from './set-user-state-on-failure.usecase';
import { SetUserStateOnSuccessUseCase } from './set-user-state-on-success.usecase';

@Injectable({
  providedIn: 'root',
})
export class LoginWithGoolgeUseCase implements UseCase<void> {
  private mapper = new AuthUserMapper();

  constructor(
    private authService: AuthService,
    private setUserStateOnSuccess: SetUserStateOnSuccessUseCase,
    private setUserStateOnFailure: SetUserStateOnFailureUseCase
  ) {}

  execute() {
    this.authService
      .loginWithGoogle()
      .then((response) => {
        if (response) {
          const user = this.mapper.mapFrom(response);

          this.loginSuccess(user);
        } else {
          this.loginFailed();
        }
      })
      .catch((err) => {
        this.loginFailed(err);
      });
  }

  private loginSuccess(payload: User) {
    this.setUserStateOnSuccess.execute(payload);
  }

  private loginFailed(_?: any) {
    this.setUserStateOnFailure.execute();
  }
}
