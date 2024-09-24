import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoProfesorPageRoutingModule } from './alumno-profesor-routing.module';

import { AlumnoProfesorPage } from './alumno-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoProfesorPageRoutingModule
  ],
  declarations: [AlumnoProfesorPage]
})
export class AlumnoProfesorPageModule {}
