import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlusPageRoutingModule } from './plus-routing.module';

import { PlusPage } from './plus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlusPageRoutingModule
  ],
  declarations: [PlusPage]
})
export class PlusPageModule {}
