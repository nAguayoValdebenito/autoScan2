import { Component } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: 'asistencia.page.html',
  styleUrls: ['asistencia.page.scss'],
})
export class AsistenciaPage {
  segment: string = 'scan';  // El segmento inicial es 'scan'
  qrData: string = 'https://www.example.com';

  constructor() {}
}