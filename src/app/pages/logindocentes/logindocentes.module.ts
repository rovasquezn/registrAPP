import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogindocentesPageRoutingModule } from './logindocentes-routing.module';

import { LogindocentesPage } from './logindocentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LogindocentesPageRoutingModule
  ],
  declarations: [LogindocentesPage]
})
export class LogindocentesPageModule {}
