import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SeoService} from '@core/seo/seo';
import { PageSeoKey } from '@core/seo/page-seo';
import {InfoComponent} from '@cards/info/info';

@Component({
  selector: 'app-japan',
  imports: [
    InfoComponent
  ],
  templateUrl: './japan.html',
  styleUrl: './japan.scss',
})
export class Japan {

  constructor(
    private seo: SeoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.seo.updatePage(this.route.snapshot.data['seo'] as PageSeoKey);
  }

}
