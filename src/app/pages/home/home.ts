import { Component } from '@angular/core';
import {SeoService} from '../../services/seo';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  constructor(
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Chinto - Développeur, Geek & Japonophile',
      description: 'Développeur Java, passionné de tech, jeux vidéo, Linux, Japon et voyages.',
      url: 'https://www.chinto.fr',
    });
  }

}
