import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then(m => m.AsistenciaPageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./pages/alumnos/alumnos.module').then(m => m.AlumnosPageModule)
  },
  {
    path: 'alumno-profesor',
    loadChildren: () => import('./pages/alumno-profesor/alumno-profesor.module').then(m => m.AlumnoProfesorPageModule)
  },
  {
    path: 'mi-asistencia',
    loadChildren: () => import('./pages/mi-asistencia/mi-asistencia.module').then(m => m.MiAsistenciaPageModule)
  },
  {
    path: 'scaneo',
    loadChildren: () => import('./pages/scaneo/scaneo.module').then(m => m.ScaneoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then(m => m.RecuperarPageModule)
  },
  {
    path: 'arquitectura',
    loadChildren: () => import('./pages/arquitectura/arquitectura.module').then(m => m.ArquitecturaPageModule)
  },
  {
    path: 'calidad',
    loadChildren: () => import('./pages/calidad/calidad.module').then(m => m.CalidadPageModule)
  },
  {
    path: 'etica',
    loadChildren: () => import('./pages/etica/etica.module').then(m => m.EticaPageModule)
  },
  {
    path: 'agregar-asignatura',
    loadChildren: () => import('./pages/agregar-asignatura/agregar-asignatura.module').then(m => m.AgregarAsignaturaPageModule)
  },
  {
    path: 'profesor',
    loadChildren: () => import('./pages/profesor/profesor.module').then(m => m.ProfesorPageModule)
  },
  // Añadir rutas específicas para redirección condicional
  {
    path: 'vista-alumnos',
    loadChildren: () => import('./pages/alumnos/alumnos.module').then(m => m.AlumnosPageModule)
  },
  {
    path: 'vista-profesor',
    loadChildren: () => import('./pages/profesor/profesor.module').then(m => m.ProfesorPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
