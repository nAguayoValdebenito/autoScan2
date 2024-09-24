import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-alumno-profesor',
  templateUrl: './alumno-profesor.page.html',
  styleUrls: ['./alumno-profesor.page.scss'],
})
export class AlumnoProfesorPage implements OnInit {

  men:Menu[]=[
    {
      ruta:"/arquitectura",
      icono:"cube",
      etiqueta:"Arquitectura de Software"
    },
    {
      ruta:"/calidad",
      icono:"cube",
      etiqueta:"Calidad de Software"
    },
    {
      ruta:"/etica",
      icono:"cube",
      etiqueta:"Etica Profesional"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
