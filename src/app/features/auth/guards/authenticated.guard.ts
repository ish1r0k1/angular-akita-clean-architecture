import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { LOGIN_URI } from '../../../constants';
import { AuthQuery } from '../state/auth.query';
import { CheckSessionUseCase } from '../useCases/check-session.usecase';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private router: Router,
    private authQuery: AuthQuery,
    private checkSession: CheckSessionUseCase
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    this.checkSession.execute();

    return this.authQuery.initialized$.pipe(
      filter(Boolean),
      mergeMap(() => this.authQuery.authUser$),
      map((u) => {
        if (!u) {
          return this.router.parseUrl(LOGIN_URI);
        }

        return true;
      })
    );
  }
}
