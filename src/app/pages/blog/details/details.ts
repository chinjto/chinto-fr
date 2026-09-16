import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Articles} from '@core/blog/articles';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MarkdownPipe} from '@core/pipes/markdown/markdown-pipe';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'page-details',
  imports: [MarkdownPipe, DatePipe, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Details {

  private readonly articles = inject(Articles);
  private readonly route = inject(ActivatedRoute);

  readonly slug = this.route.snapshot.paramMap.get('slug')!;
  readonly article = this.articles.one(this.slug);

}
