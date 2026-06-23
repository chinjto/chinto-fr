import { ChangeDetectionStrategy, Component } from '@angular/core';
import {SeoService} from '@core/seo/seo';
import {ActivatedRoute} from '@angular/router';
import {PageSeoKey} from '@core/seo/page-seo';
import {InfoComponent} from '@cards/info/info';

@Component({
  selector: 'page-board-games',
  imports: [
    InfoComponent
  ],
  templateUrl: './board-games.html',
  styleUrl: './board-games.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardGames {

  constructor(
    private seo: SeoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.seo.updatePage(this.route.snapshot.data['seo'] as PageSeoKey);
  }

}
