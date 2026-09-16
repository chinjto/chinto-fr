import {ChangeDetectionStrategy, Component, computed, effect, inject, input, signal, Signal} from '@angular/core';
import {Article} from '@core/blog/article';
import {Articles} from '@core/blog/articles';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'page-details',
  imports: [],
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
