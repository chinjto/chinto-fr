import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: { seo: 'home' },
    loadComponent: () =>
      import('./pages/home/home')
        .then(m => m.Home)
  },
  {
    path: 'projets',
    data: { seo: 'projects' },
    loadComponent: () =>
      import('./pages/home/home')
        .then(m => m.Home)
  },
  {
    path: 'voyages',
    data: { seo: 'travel' },
    loadComponent: () =>
      import('./pages/travel/travel')
        .then(m => m.Travel)
  },
  {
    path: 'japon',
    data: { seo: 'japan' },
    loadComponent: () =>
      import('./pages/japan/japan')
        .then(m => m.Japan)
  },
  {
    path: 'jeux-de-société',
    data: { seo: 'boardGames' },
    loadComponent: () =>
      import('./pages/board-games/board-games')
        .then(m => m.BoardGames)
  },
  {
    path: 'jeux',
    data: { seo: 'gaming' },
    loadComponent: () =>
      import('./pages/gaming/gaming')
        .then(m => m.Gaming)
  }
];
