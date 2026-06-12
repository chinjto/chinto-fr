import {Component} from '@angular/core';
import {SeoService} from '../../services/seo';

@Component({
  selector: 'app-japan',
  imports: [],
  templateUrl: './japan.html',
  styleUrl: './japan.scss',
})
export class Japan {

  constructor(
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Japon - Des étagères de mangas à un vrai projet de vie',
      description: 'Quatre voyages à travers le Japon, de Tokyo à Kyūshū, et un projet de vie qui dépasse la simple passion du voyage.',
      url: 'https://www.chinto.fr/japon',
      image: 'https://www.chinto.fr/assets/og/japan.png',
    });
  }

}
