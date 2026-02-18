import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { firebaseApp } from '../config/firebase.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  usuario: User | null = null;

  private auth = getAuth(firebaseApp);

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(respuesta => {
        this.usuario = respuesta.user;
        return respuesta;
      });
  }

  registro(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(respuesta => {
        this.usuario = respuesta.user;
        return respuesta;
      });
  }

  logout() {
    return signOut(this.auth).then(() => {
      this.usuario = null;
    });
  }
}
