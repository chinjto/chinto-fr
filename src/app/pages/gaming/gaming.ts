import { Component } from '@angular/core';
import {SeoService} from '../../services/seo';

@Component({
  selector: 'app-gaming',
  imports: [],
  templateUrl: './gaming.html',
  styleUrl: './gaming.scss',
})
export class Gaming {

  constructor(
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Jeux vidéo - Univers, coopérations et aventures',
      description:
        'Jeux vidéo, coopérations entre amis, expériences marquantes et univers qui ont accompagné mon parcours de joueur depuis des années.',
      url: 'https://www.chinto.fr/jeux',
      image: 'https://www.chinto.fr/assets/og/gaming.png',
    });
  }

}
