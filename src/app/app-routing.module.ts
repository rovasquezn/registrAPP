import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
 
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'scanner',
    loadChildren: () => import('./pages/scanner/scanner.module').then( m => m.ScannerPageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./pages/alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: 'detalle-alumno',
    loadChildren: () => import('./pages/detalle-alumno/detalle-alumno.module').then( m => m.DetalleAlumnoPageModule)
  },
  {
    path: 'logindocentes',
    loadChildren: () => import('./pages/logindocentes/logindocentes.module').then( m => m.LogindocentesPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },  {
    path: 'docentes',
    loadChildren: () => import('./pages/docentes/docentes.module').then( m => m.DocentesPageModule)
  },
  {
    path: 'iniciodocentes',
    loadChildren: () => import('./pages/iniciodocentes/iniciodocentes.module').then( m => m.IniciodocentesPageModule)
  },
  {
    path: 'registrarsedocentes',
    loadChildren: () => import('./pages/registrarsedocentes/registrarsedocentes.module').then( m => m.RegistrarsedocentesPageModule)
  },
  {
    path: 'detalle-docente',
    loadChildren: () => import('./pages/detalle-docente/detalle-docente.module').then( m => m.DetalleDocentePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
