import { Injectable } from '@angular/core';

import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // User
  user$: Observable<User>;
  
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if(user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );

   }

  /** Authenticates the user with Google */
  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  /** Signs the user out of Google */
  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }

  /**
   * Saves the user data to firebase
   * @param user The user we are updating
   */
  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    return userRef.set({
      uid: user.uid,
      email: user.email,
      displayName:user.displayName,
    }, {merge: true});
  }
}

