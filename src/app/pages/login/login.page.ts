import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Users } from 'src/app/interfaces/users';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

usr:Users={
  id:Date.now().toString(),
  usuario:"",
  email:"",
  password:'',
  role:'',
  departamento:''
}

constructor(private auths:FirebaseService){

}

  ngOnInit(){

  }

  login(){
    this.auths.login(this.usr.email,this.usr.password).then(()=>{console.log('usuario logeado');
      }).catch((e)=>{
      console.log('Error al iniciar sesion',e);
      })
  }

}
