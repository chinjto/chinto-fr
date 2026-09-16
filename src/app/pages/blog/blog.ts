import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {InfoComponent} from '@cards/info/info';
import {Articles} from '@core/blog/articles';
import {DatePipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'page-blog',
  imports: [
    InfoComponent,
    DatePipe,
    RouterLink
  ],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Blog {

  articles = inject(Articles);

}
