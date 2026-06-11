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
    path: 'jeux',
    loadComponent: () =>
      import('./pages/gaming/gaming')
        .then(m => m.Gaming)
  }
];
