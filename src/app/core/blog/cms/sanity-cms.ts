import {Injectable, Signal, signal} from '@angular/core';
import {Cms} from '@core/blog/cms/cms';
import { Article } from "../article";

@Injectable({providedIn: "root"})
export class SanityCms implements Cms {

  private _mockedArticles = signal<Article[]>([
    {
      slug: 'aaa',
      title: 'AAA',
      summary: 'This is a first article.',
      publishedAt: new Date('2026-09-16T16:00:00')
    },
    {
      slug: 'bbb',
      title: 'BBB',
      summary: 'This is a second article.',
      publishedAt: new Date('2026-09-16T17:00:00')
    }
  ]);

  articles(): Signal<Article[]> {
      return this._mockedArticles.asReadonly();
  }
  article(slug: string): Signal<Article> {
      throw new Error("Method not implemented.");
  }

}
