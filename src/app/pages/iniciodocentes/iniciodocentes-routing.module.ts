import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciodocentesPage } from './iniciodocentes.page';

const routes: Routes = [
  {
    path: '',
    component: IniciodocentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciodocentesPageRoutingModule {}
