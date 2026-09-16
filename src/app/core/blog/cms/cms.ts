import {Article} from '@core/blog/article';
import {Signal} from '@angular/core';

export interface Cms {

  articles(): Signal<Article[]>;

  article(slug: string): Signal<Article>;

}
