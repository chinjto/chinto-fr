import {RenderMode, ServerRoute} from '@angular/ssr';

import {getPrerenderServerRoutes} from '@core/routing/prerender-routes';
import {routes} from './app.routes';

export const serverRoutes: ServerRoute[] = [
  ...getPrerenderServerRoutes(routes),
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Server
  }
];
