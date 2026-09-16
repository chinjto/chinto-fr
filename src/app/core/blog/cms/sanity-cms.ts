import {Injectable, Signal, signal} from '@angular/core';
import {Cms} from '@core/blog/cms/cms';
import { Article } from "../article";
import {createClient} from '@sanity/client';

// TODO à bousculer dans des variables de déploiement
// rien de sensible car publique (peut partir sur Github), mais plus propre de le variabiliser par env'
export const sanityClient = createClient({
  projectId: 'msozvpkg',
  dataset: 'production',
  apiVersion: '2026-09-16',
  useCdn: true
});

interface SanityArticle {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
}

function _toArticle(article: SanityArticle): Article {
  return {
    slug: article.slug,
    title: article.title,
    summary: article.summary,
    publishedAt: new Date(article.publishedAt),
  };
}

@Injectable({providedIn: "root"})
export class SanityCms implements Cms {

  private readonly _articles = signal<Article[]>([]);

  articles(): Signal<Article[]> {
      sanityClient.fetch(`
          *[_type == "article"] | order(publishedAt desc) {
            "slug": slug.current,
            title,
            summary,
            publishedAt
          }
        `)
        .then(articles => {
          this._articles.set(articles.map(_toArticle));
        });
      return this._articles.asReadonly();
  }

  article(slug: string): Signal<Article> {
      throw new Error("Method not implemented.");
  }

}
