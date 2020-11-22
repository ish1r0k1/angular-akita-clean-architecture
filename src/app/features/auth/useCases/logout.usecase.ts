import { Injectable } from '@angular/core';
import { UseCase } from '../../../core/usecase';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LogoutUseCase implements UseCase<void> {
  constructor(private authService: AuthService) {}

  execute() {
    this.authService.logout().then(() => {});
  }
}
