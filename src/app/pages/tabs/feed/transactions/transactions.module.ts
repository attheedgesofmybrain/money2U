import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionsPageRoutingModule } from './transactions-routing.module';

import { TransactionsPage } from './transactions.page';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionsPageRoutingModule,
    MatProgressBarModule,
    MatExpansionModule
  ],
  declarations: [TransactionsPage]
})
export class TransactionsPageModule {}
