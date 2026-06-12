import { Injectable } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

type SeoConfig = {
  title: string;
  description: string;
  url: string;
  image?: string;
};


@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly siteName = 'Chinto';
  private readonly defaultImage = 'https://www.chinto.fr/assets/og/default.png';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
  ) {}

  update(config: SeoConfig): void {
    const image = config.image ?? this.defaultImage;

    this.title.setTitle(config.title);

    this.meta.updateTag({ name: 'description', content: config.description });

    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: config.url });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }
}
