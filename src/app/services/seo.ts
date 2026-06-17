import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import { absoluteUrl, PageSeoConfig, pageSeo, PageSeoKey } from './page-seo';

type SeoConfig = {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
};


@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly siteName = 'Chinto';
  // TODO: replace with a generic site-wide OG image when one is available.
  private readonly defaultImage = absoluteUrl('/assets/og/chinjto.jpeg');

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  updatePage(key: PageSeoKey): void {
    this.update(this.toSeoConfig(pageSeo[key]));
  }

  update(config: SeoConfig): void {
    const image = config.image ?? this.defaultImage;
    const type = config.type ?? 'website';

    this.title.setTitle(config.title);

    this.meta.updateTag({ name: 'description', content: config.description });
    this.updateCanonical(config.url);

    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: config.url });
    this.meta.updateTag({ property: 'og:type', content: type });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }

  private toSeoConfig(config: PageSeoConfig): SeoConfig {
    return {
      title: config.title,
      description: config.description,
      url: absoluteUrl(config.path),
      image: config.image ? absoluteUrl(config.image) : undefined,
      type: config.type,
    };
  }

  private updateCanonical(url: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
