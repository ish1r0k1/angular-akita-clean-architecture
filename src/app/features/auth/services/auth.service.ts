import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  getAuthState() {
    return this.afAuth.authState.pipe(
      tap((user) => {
        if (user) {
          console.log(`CheckSession: ${user.displayName} is logged in`);
        } else {
          console.log('CheckSession: no user found');
        }
      }),
      map((user) => user ?? null)
    );
  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    return this.afAuth
      .signInWithPopup(provider)
      .then(({ user }) => user ?? null);
  }

  logout() {
    return this.afAuth.signOut();
  }
}
