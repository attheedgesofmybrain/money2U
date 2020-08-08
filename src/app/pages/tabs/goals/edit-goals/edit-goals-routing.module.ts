import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditGoalsPage } from './edit-goals.page';

const routes: Routes = [
  {
    path: '',
    component: EditGoalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditGoalsPageRoutingModule {}
