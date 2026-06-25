import { Route } from '@angular/router';

export const SITE_URL = 'https://www.chinto.fr';
export const DEFAULT_OG_IMAGE = '/assets/og/chinjto.jpeg';
export const SITE_NAME = 'Chinto';
export const LOCALE = 'fr_FR';

export interface SeoMetadata {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonicalPath?: string;
}

export interface SeoRouteData {
  seo: SeoMetadata;
}

export function withSeoMetadata(seo: SeoMetadata): Route['data'] & SeoRouteData {
  return { seo };
}
