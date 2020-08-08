import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalsPage } from './goals.page';

const routes: Routes = [
  {
    path: '',
    component: GoalsPage
  },
  {
    path: 'add-goals',
    loadChildren: () => import('./add-goals/add-goals.module').then( m => m.AddGoalsPageModule)
  },
  {
    path: 'edit-goals',
    loadChildren: () => import('./edit-goals/edit-goals.module').then( m => m.EditGoalsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalsPageRoutingModule {}
