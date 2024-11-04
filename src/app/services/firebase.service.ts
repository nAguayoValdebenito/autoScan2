import { Inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  // Importar la autenticacion de angular en firebase
  auth = Inject(AngularFireAuth);

 // Funcion para acceder

 signIn(){

  // return signInWithEmailAndPassword(getAuth(),Register.email, Register.password)

 }


}
