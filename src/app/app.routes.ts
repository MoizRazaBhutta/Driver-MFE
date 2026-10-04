import { Routes } from '@angular/router';

export const routes: Routes = [
  // Empty string represents the root route ('')
  { path: '', loadComponent: () => import('./app').then((m) => m.App) },
  { path: '**', redirectTo: '' },
];
