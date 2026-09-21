import {inject} from '@angular/core';
import {ResolveFn} from '@angular/router';

import {SanityCms} from './cms/sanity-cms';
import {SeoMetadata, SITE_URL} from '@core/seo/seo-metadata';

export const articleSeo: ResolveFn<SeoMetadata> = async route => {
  const slug = route.paramMap.get('slug')!;
  const cms = inject(SanityCms);

  const article = await cms.metadata(slug);

  return {
    title: article.title,
    description: article.summary,
    canonicalPath: `/blog/${slug}`,
    ogType: 'article',
    ogArticle: {
      author: SITE_URL,
      published_time: article.publishedAt,
      tags: article.tags
    }
  };
};
