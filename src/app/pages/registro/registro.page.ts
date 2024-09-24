import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Register } from 'src/app/interfaces/register';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  reg:Register={
    id: Date.now(),
    usuario: "",
    password:"",
    email:""
  }

  constructor(private alrt:AlertController, private router:Router) { }

  ngOnInit() {
  }

  register(){
    if(!this.reg.usuario || !this.reg.password || !this.reg.email){
      this.alerta("Error","Los campos no pueden estar vacios");
    return;}
  }

  async alerta(encabezado: string,mensaje: string){
    const alert= await this.alrt.create ({
      header: encabezado,
      message: mensaje,
      buttons: ['Aceptar']
      
    })
    await alert.present()
  }
}
