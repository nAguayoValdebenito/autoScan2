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
      ruta:'/perfil',
      icono:'person-circle-outline',
      etiqueta:'Perfil Estudiante'
    },
    {
      ruta:'/mi-asistencia',
      icono:'desktop-outline',
      etiqueta:'Porcentaje de Asistencia'
    },
    {
      ruta:'/asistencia',
      icono:'qr-code-outline',
      etiqueta:'Scan codigo QR'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
