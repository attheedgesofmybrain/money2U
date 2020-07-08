import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMinusPageRoutingModule } from './edit-minus-routing.module';

import { EditMinusPage } from './edit-minus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMinusPageRoutingModule
  ],
  declarations: [EditMinusPage]
})
export class EditMinusPageModule {}
