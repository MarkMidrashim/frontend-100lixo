import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'collections',
    loadChildren: () => import('./collections/collections.module').then((m) => m.CollectionsModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  }
];
