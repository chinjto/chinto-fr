import { Component } from '@angular/core';
import {SeoService} from '../../services/seo';

@Component({
  selector: 'app-travel',
  imports: [],
  templateUrl: './travel.html',
  styleUrl: './travel.scss',
})
export class Travel {

  constructor(
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Voyages - Découvertes, cultures et itinéraires',
      description: 'Carnets de voyage, découvertes culturelles et expériences à travers différents pays, avec une place particulière pour le Japon et l’Irlande.',
      url: 'https://www.chinto.fr/voyages',
      image: 'https://www.chinto.fr/assets/og/travels.png',
    });
  }

}
