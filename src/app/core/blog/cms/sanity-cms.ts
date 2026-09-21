import {Injectable, Signal, signal} from '@angular/core';
import {Cms} from '@core/blog/cms/cms';
import {Article} from "../article";
import {sanityClient} from './sanity-client';

interface SanityArticle {
  slug: string;
  title: string;
  summary: string;
  content: string;
  tags: string[];
  publishedAt: string;
}

function _toArticle(article: SanityArticle): Article {
  return {
    slug: article.slug,
    title: article.title,
    summary: article.summary,
    content: article.content,
    tags: article.tags,
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
            tags,
            summary,
            publishedAt
          }
        `)
        .then(articles => this._articles.set(articles.map(_toArticle)));
      return this._articles.asReadonly();
  }

  article(slug: string): Signal<Article|undefined> {
      const article = signal<Article|undefined>(undefined);
      sanityClient.fetch(
        `
          *[_type == "article" && slug.current == $slug][0] {
            "slug": slug.current,
            title,
            tags,
            summary,
            content,
            publishedAt
          }
        `,
        {slug}
      ).then(cmsArticle => article.set(_toArticle(cmsArticle)));
      return article.asReadonly();
  }

  async metadata(slug: string): Promise<{
    title: string;
    summary: string;
  }> {
    return sanityClient.fetch(`
    *[_type == "article" && slug.current == $slug][0] {
      title,
      summary
    }
  `, {slug});
  }

}
