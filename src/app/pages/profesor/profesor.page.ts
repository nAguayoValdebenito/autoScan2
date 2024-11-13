import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  listaMenu: Menu[]=[
    {
      ruta:'/alumno-profesor',
      icono:'person-circle-outline',
      etiqueta:'Asignaturas'
    },
   
  ]

  constructor() { }

  ngOnInit() {
  }
}
