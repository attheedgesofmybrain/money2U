import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalsPageRoutingModule } from './goals-routing.module';

import { GoalsPage } from './goals.page';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoalsPageRoutingModule,
    MatExpansionModule,
    MatProgressBarModule
  ],
  declarations: [GoalsPage]
})
export class GoalsPageModule {}
