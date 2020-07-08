import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMinusPage } from './edit-minus.page';

const routes: Routes = [
  {
    path: '',
    component: EditMinusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMinusPageRoutingModule {}
