import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';  // Importar NavController
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-scaneo',
  templateUrl: 'scaneo.page.html',
  styleUrls: ['scaneo.page.scss'],
})
export class ScaneoPage {
  qrCodeDataUrl: string = '';  // URL de la imagen del QR generado

  constructor(private navController: NavController) {}  // Inyectar NavController

  // Función para retroceder a la página anterior
  goBack(): void {
    this.navController.back();  // Retroceder a la página anterior
  }

  // Función para generar el código QR automáticamente con información de asistencia
  generateQR(): void {
    const idResidente = '1234';  // ID del residente (puede ser dinámico)
    const timestamp = new Date().toISOString();  // Fecha y hora actual

    const qrData = `asistencia:${idResidente}:${timestamp}`;  // Formato del código QR

    // Generar el código QR
    QRCode.toDataURL(qrData)
      .then((url) => {
        this.qrCodeDataUrl = url;  // Establecer el URL de la imagen generada
      })
      .catch((error) => {
        console.error('Error al generar el código QR', error);
      });
  }
}
