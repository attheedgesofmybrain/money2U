import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPlusPageRoutingModule } from './edit-plus-routing.module';

import { EditPlusPage } from './edit-plus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPlusPageRoutingModule
  ],
  declarations: [EditPlusPage]
})
export class EditPlusPageModule {}
