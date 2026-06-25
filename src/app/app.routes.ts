import { Routes } from '@angular/router';
import {withSeoMetadata} from '@core/seo/seo-metadata';

export const routes: Routes = [
  {
    path: '',
    data: withSeoMetadata({
      title: 'Chinto - Développeur, Geek & Japonophile',
      description: 'Développeur Java, passionné de tech, jeux vidéo, Linux, Japon et voyages.',
      ogImage: '/assets/og/chinjto.jpeg',
      canonicalPath: '/',
    }),
    loadComponent: () =>
      import('./pages/home/home')
        .then(m => m.Home)
  },
  {
    path: 'voyages',
    data: withSeoMetadata({
      title: 'Voyages - D\'un premier passeport à l\'envie de repartir',
      description: 'Carnets de voyage, découvertes culturelles et expériences à travers différents pays, avec une place particulière pour le Japon et l’Irlande.',
      ogImage: '/assets/og/travels.png',
      canonicalPath: '/voyages',
    }),
    loadComponent: () =>
      import('./pages/travel/travel')
        .then(m => m.Travel)
  },
  {
    path: 'japon',
    data: withSeoMetadata({
      title: 'Japon - Des étagères de mangas à un vrai projet de vie',
      description: 'Quatre voyages à travers le Japon, de Tokyo à Kyūshū, et un projet de vie qui dépasse la simple passion du voyage.',
      ogImage: '/assets/og/japan.png',
      canonicalPath: '/japon',
    }),
    loadComponent: () =>
      import('./pages/japan/japan')
        .then(m => m.Japan)
  },
  {
    path: 'jeux-de-societe',
    data: withSeoMetadata({
      title: 'Jeux de société - Venez tous jouer autour d\'une table',
      description: 'Entre stratégie, narration, bluff et coopération : découvrez les jeux de société qui m\'ont marqué et ceux que j\'attends avec impatience.',
      canonicalPath: '/jeux-de-societe',
    }),
    loadComponent: () =>
      import('./pages/board-games/board-games')
        .then(m => m.BoardGames)
  },
  {
    path: 'jeux',
    data: withSeoMetadata({
      title: 'Jeux vidéo - Univers, coopérations et aventures',
      description: 'Jeux vidéo, coopérations entre amis, expériences marquantes et univers qui ont accompagné mon parcours de joueur depuis des années.',
      canonicalPath: '/jeux',
    }),
    loadComponent: () =>
      import('./pages/gaming/gaming')
        .then(m => m.Gaming)
  }
];
