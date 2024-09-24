import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoProfesorPage } from './alumno-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoProfesorPageRoutingModule {}
