import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  constructor(private firbaseAuth: AngularFireAuth) {}

  async signUp(email: string, password: string) {
    await this.firbaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      });
  }

  async signIn(email: string, password: string) {
    await this.firbaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      });
  }

  logOut() {
    this.firbaseAuth.signOut();
    this.isLoggedIn = false;
    localStorage.removeItem('user');
  }
}
