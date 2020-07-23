import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/authentication/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/authentication/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'plus',
    loadChildren: () => import('./pages/tabs/feed/plus/plus.module').then(m => m.PlusPageModule)
  },
  {
    path: 'minus',
    loadChildren: () => import('./pages/tabs/feed/minus/minus.module').then(m => m.MinusPageModule)
  },
  {
    path: 'edit-plus/:id',
    loadChildren: () => import('./pages/tabs/feed/edit-plus/edit-plus.module').then( m => m.EditPlusPageModule)
  },
  {
    path: 'edit-minus/:id',
    loadChildren: () => import('./pages/tabs/feed/edit-minus/edit-minus.module').then( m => m.EditMinusPageModule)
  }
  ,
  {
    path: 'transactions',
    loadChildren: () => import('./pages/tabs/feed/transactions/transactions.module').then( m => m.TransactionsPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/tabs/feed/test/test.module').then( m => m.TestPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
