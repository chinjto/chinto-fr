import {RenderMode, ServerRoute} from '@angular/ssr';

import {sanityClient} from '@core/blog/cms/sanity-client';
import {getPrerenderServerRoutes} from '@core/routing/prerender-routes';
import {routes} from './app.routes';

export const serverRoutes: ServerRoute[] = [
  ...getPrerenderServerRoutes(routes),
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return sanityClient.fetch<{slug: string}[]>(`
        *[_type == "article" && defined(slug.current)] {
          "slug": slug.current
        }
      `);
    }
  }
];
