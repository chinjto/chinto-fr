import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core';
import {Articles} from '@core/blog/articles';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MarkdownPipe} from '@core/pipes/markdown/markdown-pipe';
import {formatDate, isPlatformBrowser} from '@angular/common';
import {Article} from '@core/blog/article';

@Component({
  selector: 'page-details',
  imports: [MarkdownPipe, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Details {

  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      import('@mdit/plugin-tab/register-tab');
    }
  }

  private readonly articles = inject(Articles);
  private readonly route = inject(ActivatedRoute);

  readonly slug = this.route.snapshot.paramMap.get('slug')!;
  readonly article = this.articles.one(this.slug);

  tags(article: Article|undefined): string[] {
    if (!article)
      return [];
    return [
      formatDate(article.publishedAt, 'd/MM/y HH:mm', 'en-US'),
      ...article.tags
    ];
  }

}
