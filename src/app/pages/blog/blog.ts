import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {InfoComponent} from '@cards/info/info';
import {Articles} from '@core/blog/articles';
import {formatDate} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Article} from '@core/blog/article';

@Component({
  selector: 'page-blog',
  imports: [
    InfoComponent,
    RouterLink
  ],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Blog {

  articles = inject(Articles);

  tags(article: Article): string[] {
    return [
      formatDate(article.publishedAt, 'd/MM/y HH:mm', 'en-US'),
      ...article.tags
    ];
  }

}
