import {computed, Injectable, signal} from '@angular/core';
import {NavigationMetadata} from '@core/navigation/navigation-metadata';

@Injectable({
  providedIn: 'root',
})
export class Navigation {

  private _navigation: NavigationMetadata[] = [
    {
      label: "Accueil",
      order: 10,
      isVisible: true,
      link: '/'
    },
    {
      label: "Voyages",
      order: 20,
      isVisible: true,
      link: '/voyages'
    },
    {
      label: "Japon",
      order: 30,
      isVisible: true,
      link: '/japon'
    },
    {
      label: "Jeux de société",
      order: 40,
      isVisible: true,
      link: '/jeux-de-societe'
    }
  ];

  private readonly _routes = signal(this._navigation);

  readonly routes = computed(() =>
    this._routes()
      .filter(route => route.isVisible)
      .sort((a, b) => a.order - b.order)
  );

}
