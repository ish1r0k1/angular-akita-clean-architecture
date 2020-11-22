import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AuthState, AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {
  constructor(protected store: AuthStore) {
    super(store);
  }

  get authUser$() {
    return this.select((state) => state.user);
  }

  get initialized$() {
    return this.select((state) => state.initialized);
  }
}
