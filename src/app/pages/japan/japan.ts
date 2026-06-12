import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-japan',
  imports: [],
  templateUrl: './japan.html',
  styleUrl: './japan.scss',
})
export class Japan {

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Japon - Chinto');

    this.meta.updateTag({
      property: 'og:title',
      content: 'Japon - Des étagères de mangas à un vrai projet de vie'
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'Quatre voyages à travers le Japon...'
    });

    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.chinto.fr/assets/og/japan.png'
    });
  }

}
