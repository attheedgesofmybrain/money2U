import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPlusPage } from './edit-plus.page';

const routes: Routes = [
  {
    path: '',
    component: EditPlusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPlusPageRoutingModule {}
