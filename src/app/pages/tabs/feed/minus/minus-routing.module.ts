import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinusPage } from './minus.page';

const routes: Routes = [
  {
    path: '',
    component: MinusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinusPageRoutingModule {}
