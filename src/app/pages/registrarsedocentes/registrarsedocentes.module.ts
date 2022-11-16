import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarsedocentesPageRoutingModule } from './registrarsedocentes-routing.module';

import { RegistrarsedocentesPage } from './registrarsedocentes.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarsedocentesPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [RegistrarsedocentesPage]
})
export class RegistrarsedocentesPageModule {}
