import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  presentingElement = undefined;

  alertButtons = [
    {
      text: 'Guardar',
      handler: () => {
        this.navegar();
        console.log('Asistencia guardada');
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Asistencia no guardada');
      },
    },

  ];

  constructor(private alrt: AlertController,private actionSheetCtrl: ActionSheetController, private router:Router) { }

  ngOnInit() {

  }

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Desea cerrar el QR?',
      buttons: [
        {
          text: 'Si',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };

  async presentAlert() {
    const alert = await this.alrt.create({
      header: 'Asistencia',
      message: '¿Estás seguro de guardar la asistencia?',
      buttons: this.alertButtons,
    });

    await alert.present();
  }

  navegar() {
    this.router.navigate(['/home']);
  }
}