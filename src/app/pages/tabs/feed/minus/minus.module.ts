import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinusPageRoutingModule } from './minus-routing.module';

import { MinusPage } from './minus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinusPageRoutingModule
  ],
  declarations: [MinusPage]
})
export class MinusPageModule {}
