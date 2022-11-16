import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciodocentesPageRoutingModule } from './iniciodocentes-routing.module';

import { IniciodocentesPage } from './iniciodocentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciodocentesPageRoutingModule
  ],
  declarations: [IniciodocentesPage]
})
export class IniciodocentesPageModule {}
