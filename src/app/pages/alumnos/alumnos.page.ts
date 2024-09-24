import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  menuAlumno: Menu[]=[
    {
      ruta:'/mi-asistencia',
      icono:'person-circle-outline',
      etiqueta:'Porcentaje de Asistencia'
    },
    {
      ruta:'/scaneo',
      icono:'qr-code-outline',
      etiqueta:'Scan codigo QR'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
