import {inject, Injectable, signal, Signal} from '@angular/core';
import {Article} from './article';
import {SanityCms} from '@core/blog/cms/sanity-cms';
import {Cms} from '@core/blog/cms/cms';

@Injectable({providedIn: "root"})
export class Articles {

  private cms: Cms = inject(SanityCms);

  get all(): Signal<Article[]> {
    return this.cms.articles();
  }

  one(slug: string): Signal<Article|undefined> {
    return this.cms.article(slug);
  }

}
