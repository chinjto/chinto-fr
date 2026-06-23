export type PageSeoKey = 'home' | 'travel' | 'japan' | 'boardGames' | 'gaming';

export type PageSeoConfig = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
};

export const siteUrl = 'https://www.chinto.fr';

export const pageSeo: Record<PageSeoKey, PageSeoConfig> = {
  home: {
    title: 'Chinto - Développeur, Geek & Japonophile',
    description: 'Développeur Java, passionné de tech, jeux vidéo, Linux, Japon et voyages.',
    path: '/',
    image: '/assets/og/chinjto.jpeg',
    type: 'website',
  },
  travel: {
    title: 'Voyages - D\'un premier passeport à l\'envie de repartir',
    description: 'Carnets de voyage, découvertes culturelles et expériences à travers différents pays, avec une place particulière pour le Japon et l’Irlande.',
    path: '/voyages',
    image: '/assets/og/travels.png',
    type: 'website',
  },
  japan: {
    title: 'Japon - Des étagères de mangas à un vrai projet de vie',
    description: 'Quatre voyages à travers le Japon, de Tokyo à Kyūshū, et un projet de vie qui dépasse la simple passion du voyage.',
    path: '/japon',
    image: '/assets/og/japan.png',
    type: 'website',
  },
  boardGames: {
    title: 'Jeux de société - Venez tous jouer autour d\'une table',
    description: 'Entre stratégie, narration, bluff et coopération : découvrez les jeux de société qui m\'ont marqué et ceux que j\'attends avec impatience.',
    path: '/jeux-de-société',
    type: 'website',
  },
  gaming: {
    title: 'Jeux vidéo - Univers, coopérations et aventures',
    description: 'Jeux vidéo, coopérations entre amis, expériences marquantes et univers qui ont accompagné mon parcours de joueur depuis des années.',
    path: '/jeux',
    type: 'website',
  }
};

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).toString();
}
