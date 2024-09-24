import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Users } from 'src/app/interfaces/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:Users={
    usr:"",
    password:""
  }

  constructor(private alrt:AlertController, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.usuario.usr=="juanito@profesor.com" || this.usuario.password=="123456"){
      this.alerta("Bienvenido","Profesor Juanito")
      this.router.navigateByUrl("/home")

    }
    else if(this.usuario.usr=="nicolas@gmail.com" || this.usuario.password=="123"){
      this.alerta("Bienvenido","Alumno Nicolas")
      this.router.navigateByUrl("/alumnos")
    }
    else{
      this.alerta("Error","Error en el Usuario o Contraseña")
    }
  }

  async alerta(encabezado: string,mensaje: string){
    const alert= await this.alrt.create ({
      header: encabezado,
      message: mensaje,
      buttons: ['Ok']
      
    })
    await alert.present()
  }
}
