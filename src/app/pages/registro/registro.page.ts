import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Users } from 'src/app/interfaces/users';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usr: Users = {
    id: Date.now().toString(),
    usuario: "",
    email: "",
    password: '',
    role: '',        // Nuevo campo para el rol
    departamento: '' // Nuevo campo para el departamento (solo para Profesor)
  };

  isProfesor: boolean = false; // Controla la visibilidad del campo de departamento

  constructor(private auths: FirebaseService, private router: Router, private alertCtrl: AlertController, private AFAuth: AngularFireAuth, private firestore: AngularFirestore) { }

  ngOnInit() { }

  // Método para actualizar la visibilidad del campo de departamento
  onRoleChange() {
    this.isProfesor = this.usr.role === 'Profesor';
    if(!this.isProfesor){
      this.usr.role === 'Alumno';
    }
  }

  async register(usuario:any) {
    return await this.firestore.collection('usuarios').add(usuario)
  }

  async registrarUsuario(){
    const credencial = await this.AFAuth.createUserWithEmailAndPassword(this.usr.email,this.usr.password)
    const userId = credencial.user?.uid;
    const datoUsuario: any = {
      id: userId,
      usuario:this.usr.usuario,
      email:this.usr.email,
      password:this.usr.password,
      role:this.usr.role,
      departamento:this.usr.departamento
    }
    await this.register(datoUsuario);
    console.log('tamos listos mono culiao');
  }

}
