import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditGoalsPageRoutingModule } from './edit-goals-routing.module';

import { EditGoalsPage } from './edit-goals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditGoalsPageRoutingModule
  ],
  declarations: [EditGoalsPage]
})
export class EditGoalsPageModule {}
