import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import produce from 'immer';
import { User } from '../../../domain/user';

export interface AuthState {
  user: User | null;
  initialized: boolean;
}

export function createInitialState(): AuthState {
  return {
    user: null,
    initialized: false,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth', producerFn: produce })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialState());
  }
}
