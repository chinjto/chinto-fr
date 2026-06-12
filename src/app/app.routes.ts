import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home')
        .then(m => m.Home)
  },
  {
    path: 'voyages',
    loadComponent: () =>
      import('./pages/travel/travel')
        .then(m => m.Travel)
  },
  {
    path: 'japon',
    loadComponent: () =>
      import('./pages/japan/japan')
        .then(m => m.Japan)
  },
  {
    path: 'jeux',
    loadComponent: () =>
      import('./pages/gaming/gaming')
        .then(m => m.Gaming)
  }
];
