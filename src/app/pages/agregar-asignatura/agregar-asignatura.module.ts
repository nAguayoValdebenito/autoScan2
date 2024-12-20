// agregar-asignatura.page.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgregarAsignaturaPage } from './agregar-asignatura.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: AgregarAsignaturaPage }])
  ],
  declarations: [AgregarAsignaturaPage]
})
export class AgregarAsignaturaPageModule {}
