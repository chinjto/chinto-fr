import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SeoService} from '../../services/seo';
import { PageSeoKey } from '../../services/page-seo';

@Component({
  selector: 'app-gaming',
  imports: [],
  templateUrl: './gaming.html',
  styleUrl: './gaming.scss',
})
export class Gaming {

  constructor(
    private seo: SeoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.seo.updatePage(this.route.snapshot.data['seo'] as PageSeoKey);
  }

}
