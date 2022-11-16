import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarsedocentesPage } from './registrarsedocentes.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarsedocentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarsedocentesPageRoutingModule {}
