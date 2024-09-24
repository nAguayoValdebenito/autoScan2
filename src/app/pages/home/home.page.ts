import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  listaMenu: Menu[]=[
    {
      ruta:'/alumno-profesor',
      icono:'person-circle-outline',
      etiqueta:'Alumnos'
    },
    {
      ruta:'/asistencia',
      icono:'list-circle-outline',
      etiqueta:'Asistencia'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
